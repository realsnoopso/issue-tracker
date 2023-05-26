package com.team6.issue_tracker.application.issue.dto;

import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import com.team6.issue_tracker.application.milestone.Milestone;
import lombok.Builder;
import lombok.Data;
import org.joda.time.LocalDateTime;

import java.util.List;


@Data @Builder
public class IssueDto {

    private Long index;
    private String title;
    private MemberDto writer;
    private MemberDto assignee;
    private Status status;
    private LocalDateTime createdAt;
    //TODO milestone dto로 바꾸기
    private Milestone milestone;
    private List<LabelDto> labelList;

    public IssueDto() {
    }

    public IssueDto(Long index, String title, MemberDto writer, MemberDto assignee, Status status, LocalDateTime createdAt, Milestone milestone, List<LabelDto> labelList) {
        this.index = index;
        this.title = title;
        this.writer = writer;
        this.assignee = assignee;
        this.status = status;
        this.createdAt = createdAt;
        this.milestone = milestone;
        this.labelList = labelList;
    }

}