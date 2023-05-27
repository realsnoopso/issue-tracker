package com.team6.issue_tracker.domain.page;

import com.team6.issue_tracker.domain.issue.IssueService;
import com.team6.issue_tracker.domain.issue.Issue;
import com.team6.issue_tracker.domain.page.dto.IssueDto;
import com.team6.issue_tracker.domain.issue.IssueMapper;
import com.team6.issue_tracker.domain.issue.IssueFilter;
import com.team6.issue_tracker.domain.label.LabelService;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.MemberService;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
import com.team6.issue_tracker.domain.milestone.MilestoneService;
import com.team6.issue_tracker.domain.page.dto.IssuePageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service    // application Service
@RequiredArgsConstructor
public class PageService {

    public static final Integer PAGE_SIZE = 20;

    private final IssueService issueService;
    private final MemberService memberService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    public IssuePageResponse getAPage(Integer offset, IssueFilter filter) {

        Map<Long, MemberDto> members = memberService.getAllMembers();
        Map<Long, Milestone> milestones = milestoneService.getAllMilestones();
        Map<Long, LabelDto> labels = labelService.getAllLabels();

        List<Issue> issueList = issueService.findByfilterWithPage(offset, PAGE_SIZE, filter);

        List<IssueDto> issueDtos = new ArrayList<>();

        for (Issue issue : issueList) {
            MemberDto writer = getWriter(members, issue);
            MemberDto assignee = getAssignee(members, issue);
            Milestone milestone = getMilestone(milestones, issue);
            List<LabelDto> labelList = getLabelList(labels, issue);

            IssueDto issueDto = IssueMapper.toDto(issue, writer, assignee, labelList, milestone);
            issueDtos.add(issueDto);
        }

        return IssuePageResponse.builder()
                .issuesList(issueDtos)
                .openIssueCount(issueService.getOpenIssueNum())
                .closedIssueCount(issueService.getClosedIssueNum())
                .page(offset)
                .openIssueMaxPage(getOpenIssueMaxPage())
                .closeIssueMaxPage(getCloseIssueMaxPage())
                .userList(new ArrayList<>(members.values()))
                .labelList(new ArrayList<>(labels.values()))
                .milestoneList(new ArrayList<>(milestones.values()))
                .build();
    }

    private List<LabelDto> getLabelList(Map<Long, LabelDto> labels, Issue issue) {
        return issue.getLabelOnIssue().values()
                        .stream()
                        .map(e -> labels.get(e.getLabelIdx()))
                        .collect(Collectors.toList());
    }

    private MemberDto getWriter(Map<Long, MemberDto> members, Issue issue) {
        return members.get(issue.getWriter().getId());
    }

    private Milestone getMilestone(Map<Long, Milestone> milestones, Issue issue) {
        Milestone milestone = null;
        if (issue.getMilestoneIdx() != null) {
            milestone = milestones.get(issue.getMilestoneIdx().getId());
        }
        return milestone;
    }

    private MemberDto getAssignee(Map<Long, MemberDto> members, Issue issue) {
        MemberDto assignee = null;
        if (issue.getAssignee() != null) {
            assignee = members.get(issue.getAssignee().getId());
        }
        return assignee;
    }

    public Integer getOpenIssueMaxPage() {
        return issueService.getOpenIssueNum()/PAGE_SIZE;
    }

    public Integer getCloseIssueMaxPage() {
        return issueService.getClosedIssueNum()/PAGE_SIZE;
    }

}
