package com.team6.issue_tracker.application.issue.dto;

import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.domain.Member;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import com.team6.issue_tracker.application.milestone.Milestone;

import java.util.List;

public class IssueMapper {

    public static IssueDto toDto(Issue issue, Member writer, Member assignee, List<LabelDto> labels, Milestone milestone){
        return IssueDto.builder()
                .index(issue.getIssueIdx())
                .title(issue.getTitle())
                .writer(MemberDto.from(writer))
                .assignee(MemberDto.from(assignee))
                .status(Status.of(issue.getIsOpen()))
                .createdAt(issue.getCreatedAt())
                .labelList(labels)
                .milestone(milestone)
                .build();
    }

}
