package com.team6.issue_tracker.application.issue;

import com.team6.issue_tracker.application.comment.dto.CommentDto;
import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.issue.dto.IssueDetail;
import com.team6.issue_tracker.application.issue.dto.IssueDto;
import com.team6.issue_tracker.application.issue.dto.Status;
import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import com.team6.issue_tracker.application.milestone.Milestone;

import java.util.List;

public class IssueMapper {

    public static IssueDto toDto(Issue issue, MemberDto writer, MemberDto assignee,
                                 List<LabelDto> labels, Milestone milestone) {
        return IssueDto.builder()
                .index(issue.getIssueIdx())
                .title(issue.getTitle())
                .writer(writer)
                .assignee(assignee)
                .status(Status.of(issue.getIsOpen()))
                .createdAt(issue.getCreatedAt())
                .labelList(labels)
                .milestone(milestone)
                .build();
    }

    public static IssueDetail toDetails(Issue issue, MemberDto writer, MemberDto assignee,
                                        List<LabelDto> labels, Milestone milestone,
                                        List<CommentDto> coments){
        return IssueDetail.builder()
                .index(issue.getIssueIdx())
                .title(issue.getTitle())
                .writer(writer)
                .assignee(assignee)
                .status(Status.of(issue.getIsOpen()))
                .createdAt(issue.getCreatedAt())
                .labelList(labels)
                .milestone(milestone)
                .commentList(coments)
                .build();
    }

}
