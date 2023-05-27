package com.team6.issue_tracker.domain.issue;

import com.team6.issue_tracker.domain.model.Status;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
import com.team6.issue_tracker.domain.page.dto.IssueDto;
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

}
