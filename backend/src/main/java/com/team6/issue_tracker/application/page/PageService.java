package com.team6.issue_tracker.application.page;

import com.team6.issue_tracker.application.issue.IssueRepository;
import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.issue.domain.Labeling;
import com.team6.issue_tracker.application.issue.dto.IssueDto;
import com.team6.issue_tracker.application.issue.dto.IssueMapper;
import com.team6.issue_tracker.application.issue.IssueFilter;
import com.team6.issue_tracker.application.label.Label;
import com.team6.issue_tracker.application.label.LabelRepository;
import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.MemberRepository;
import com.team6.issue_tracker.application.member.domain.Member;
import com.team6.issue_tracker.application.milestone.Milestone;
import com.team6.issue_tracker.application.milestone.MilestoneRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PageService {

    public static final Integer PAGE_SIZE = 20;

    private final IssueRepository issueRepository;
    private final MemberRepository memberRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public PageService(IssueRepository issueRepository,
                       MemberRepository memberRepository,
                       LabelRepository labelRepository,
                       MilestoneRepository milestoneRepository) {
        this.issueRepository = issueRepository;
        this.memberRepository = memberRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
    }

    public List<IssueDto> findAllByfilter(Integer offset, IssueFilter filter) {

        List<Issue> issueList = issueRepository.findAllByFilter(
                filter.getIsOpen(),
                filter.getMailestone(),
                filter.getWriter(),
                filter.getAssignee(),
                filter.getLabel(),
                PAGE_SIZE,
                offset
        );

        List<IssueDto> issueDtos = new ArrayList<>();

        for (Issue issue : issueList) {
            Member writer = memberRepository.findById(issue.getWriter().getId())
                                            .orElseThrow();
            Member assignee = null;
            if (issue.getAssignee() != null) {
                assignee = memberRepository.findById(issue.getAssignee().getId())
                        .orElseThrow();
            }
            Iterable<Label> labels = labelRepository.findAllById(issue.getLabelOnIssue().values().stream()
                                                        .map(Labeling::getLabelIdx)
                                                        .collect(Collectors.toSet()));

            Milestone milestone = null;
            if (issue.getMilestoneIdx() != null) {
                milestone = milestoneRepository.findById(issue.getMilestoneIdx().getId())
                        .orElseThrow();
            }

            List<LabelDto> labelDtoList = new ArrayList<>();
            labels.forEach(e -> labelDtoList.add(LabelDto.of(e)));
            IssueDto issueDto = IssueMapper.toDto(issue, writer, assignee, labelDtoList, milestone);
            issueDtos.add(issueDto);
        }

        return issueDtos;
    }

    public Integer getOpenIssueMaxPage() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, true)/20;
    }

    public Integer getCloseIssueMaxPage() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, false)/20;
    }

    public Map<Long, Milestone> getAllMilestone() {
        return milestoneRepository.findAllByIsDeletedFalse();
    }
}
