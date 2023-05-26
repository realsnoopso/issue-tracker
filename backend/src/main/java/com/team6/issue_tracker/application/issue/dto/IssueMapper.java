package com.team6.issue_tracker.application.issue.dto;

import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.label.Label;
import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.domain.Member;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import org.joda.time.LocalDateTime;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class IssueMapper {

    public static IssueDto toDto(Issue issue, Member writer, Member assignee, List<Label> labels){
        List<LabelDto> collect = new ArrayList<>();

        if (labels!= null) {
            collect = labels.stream()
                    .map(LabelDto::of)
                    .collect(Collectors.toList());
        }

        return IssueDto.builder()
                .index(issue.getIssueIdx())
                .title(issue.getTitle())
                .writer(MemberDto.from(writer))
                .assignee(MemberDto.from(assignee))
                .status(Status.of(issue.getIsOpen()))
                .createdAt(LocalDateTime.parse(issue.getCreatedAt().toString()))
                .labelList(collect)
                .build();
    }

//    List<IssueDto> toDtoList(List<Issue> issues, Map<Long, Member> writers, Map<Long, Member> assignees) {
//        return issues.stream()
//                .map(i -> toDto(i, writers.get(i.getWriter().getId()), assignees.get(i.getAssignee().getId())))
//                .collect(Collectors.toList());
//    }
}
