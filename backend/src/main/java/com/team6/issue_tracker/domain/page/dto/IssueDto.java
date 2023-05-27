package com.team6.issue_tracker.domain.page.dto;

import com.team6.issue_tracker.domain.model.Status;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.List;


@Data @Builder
public class IssueDto {

    private Long index;
    private String title;
    private MemberDto writer;
    private MemberDto assignee;
    private Status status;
    private Instant createdAt;
    private Instant editedAt;
    //TODO milestone dto로 바꾸기
    private Milestone milestone;
    private List<LabelDto> labelList;

    public IssueDto(Long index, String title, MemberDto writer, MemberDto assignee, Status status, Instant createdAt, Instant edditedAt, Milestone milestone, List<LabelDto> labelList) {
        this.index = index;
        this.title = title;
        this.writer = writer;
        this.assignee = assignee;
        this.status = status;
        this.createdAt = createdAt;
        this.editedAt = edditedAt;
        this.milestone = milestone;
        this.labelList = labelList;
    }

}
