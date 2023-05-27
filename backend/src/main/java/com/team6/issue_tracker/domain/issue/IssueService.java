package com.team6.issue_tracker.domain.issue;

import com.team6.issue_tracker.domain.comment.Comment;
import com.team6.issue_tracker.domain.comment.CommentService;
import com.team6.issue_tracker.domain.comment.dto.CommentDto;
import com.team6.issue_tracker.domain.issue.domain.Issue;
import com.team6.issue_tracker.domain.issue.dto.IssueDetail;
import com.team6.issue_tracker.domain.label.LabelService;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.MemberService;
import com.team6.issue_tracker.domain.member.domain.Member;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
import com.team6.issue_tracker.domain.milestone.MilestoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    private final CommentService commentService;
    private final MemberService memberService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    public Integer getOpenIssueNum() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, true);
    }

    public Integer getClosedIssueNum() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, false);
    }

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
                filter.getWriter(),
                filter.getAssignee(),
                filter.getLabel(),
                pageSize,
                offset
        );
    }

    public IssueDetail findById(Long issueIdx){
        Issue issue = findIssueById(issueIdx);

        List<Comment> comments = commentService.getCommentsOnIssue(issueIdx);

        Member writer = memberService.findById(issue.getWriter().getId());
        Member assignee = memberService.findById(issue.getAssignee().getId());

        Milestone milestone = null;
        if (issue.getMilestoneIdx() != null) {
            milestone =milestoneService.findById(issue.getMilestoneIdx().getId());
        }

        List<LabelDto> labelDtoList = new ArrayList<>();
        labelService.findAllById(issue.getLabelOnIssue().values())
                .forEach(l -> labelDtoList.add(LabelDto.of(l)));

        List<CommentDto> commentDtos = new ArrayList<>();
        for (Comment comment : comments) {
            Member commentWriter = memberService.findById(comment.getCreatedBy().getId());
            CommentDto dto = CommentDto.fromComment(comment, commentWriter);
            commentDtos.add(dto);
        }

        return IssueMapper.toDetails(issue, MemberDto.from(writer), MemberDto.from(assignee), labelDtoList, milestone, commentDtos);
    }

    public void saveNewIssue(Issue toIssue) {
        issueRepository.save(toIssue);
    }
}
