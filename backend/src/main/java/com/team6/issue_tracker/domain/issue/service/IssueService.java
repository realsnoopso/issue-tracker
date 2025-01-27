package com.team6.issue_tracker.domain.issue.service;

import com.team6.issue_tracker.domain.comment.domain.Comment;
import com.team6.issue_tracker.domain.comment.service.CommentService;
import com.team6.issue_tracker.domain.comment.dto.CommentDto;
import com.team6.issue_tracker.domain.issue.domain.Issue;
import com.team6.issue_tracker.domain.milestone.dto.MilestoneDetail;
import com.team6.issue_tracker.domain.model.Status;
import com.team6.issue_tracker.domain.page.dto.IssueFilter;
import com.team6.issue_tracker.domain.issue.dto.IssueDetail;
import com.team6.issue_tracker.domain.issue.repository.IssueRepository;
import com.team6.issue_tracker.domain.label.service.LabelService;
import com.team6.issue_tracker.domain.label.dto.LabelSummary;
import com.team6.issue_tracker.domain.member.service.MemberService;
import com.team6.issue_tracker.domain.member.domain.Member;
import com.team6.issue_tracker.domain.member.dto.MemberDetail;
import com.team6.issue_tracker.domain.milestone.service.MilestoneService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    private final CommentService commentService;
    private final MemberService memberService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    private Issue findIssueById(Long issueIdx) throws NoSuchElementException {
        Issue issue = issueRepository.findById(issueIdx).orElseThrow();

        if (issue.getIsDeleted()) {
            throw new NoSuchElementException("삭제된 이슈입니다.");
        }

        return issue;
    }

    public List<Issue> findByfilterWithPage(Integer offset, Integer pageSize, IssueFilter filter) {
        return issueRepository.findAllBy(
                filter.getIsOpen(),
                filter.getMailestone(),
                filter.getMilestoneEmptyFlag(),
                filter.getWriter(),
                filter.getAssignee(),
                filter.getAssigneeEmptyFlag(),
                filter.getLabel(),
                filter.getLabelEmptyFlag(),
                pageSize,
                offset
        );
    }

    public IssueDetail findById(Long issueIdx){
        Issue issue = findIssueById(issueIdx);

        List<Comment> comments = commentService.getCommentsOnIssue(issueIdx);
        Map<Long, Member> members = findMembers(issue);

        Member writer = members.get(issue.getWriter().getId());
        Member assignee = getAssignee(members, issue);
        MilestoneDetail milestone = getMilestone(issue);

        List<LabelSummary> labelDtoList = new ArrayList<>();
        labelService.findAllById(issue.getLabelOnIssue())
                .forEach(l -> labelDtoList.add(LabelSummary.fromLabel(l)));

        List<CommentDto> commentDtos = new ArrayList<>();
        for (Comment comment : comments) {
            Member commentWriter = memberService.findById(comment.getCreatedBy().getId());
            CommentDto dto = CommentDto.fromComment(comment, commentWriter);
            commentDtos.add(dto);
        }

        return IssueDetail.toDetails(issue, MemberDetail.from(writer), MemberDetail.from(assignee), labelDtoList, milestone, commentDtos);
    }

    private Map<Long, Member> findMembers(Issue issue) {
        Set<Long> findList = new HashSet<>();

        findList.add(issue.getWriter().getId());

        if (issue.getAssignee() != null) {
            findList.add(issue.getAssignee().getId());
        }

        return memberService.findMembers(findList);
    }

    private Member getAssignee(Map<Long, Member> members, Issue issue) {
        Member assginee = null;
        if (issue.getAssignee() != null) {
            assginee = members.get(issue.getAssignee().getId());
        }
        return assginee;
    }

    private MilestoneDetail getMilestone(Issue issue) {
        MilestoneDetail milestone = null;
        if (issue.getMilestone() != null) {
            milestone =milestoneService.findByIdWithIssueCount(issue.getMilestone().getId());
        }
        return milestone;
    }

    public Issue saveIssue(Issue toIssue) {
        return issueRepository.save(toIssue);
    }

    public long getIssueNum(Status status) {
        if (status==Status.OPEN) {
            return issueRepository.countAllByIsDeletedFalseAndIsOpen(true);
        }
        return issueRepository.countAllByIsDeletedFalseAndIsOpen(false);
    }
}
