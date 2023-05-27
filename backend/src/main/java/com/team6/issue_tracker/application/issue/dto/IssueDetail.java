package com.team6.issue_tracker.application.issue.dto;

import com.team6.issue_tracker.application.comment.dto.CommentDto;
import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import com.team6.issue_tracker.application.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.List;


@Data @Builder
@AllArgsConstructor
public class IssueDetail {

    private Long index;
    private String title;
    private String contents;
    private MemberDto writer;
    private MemberDto assignee;
    private Status status;
    private Instant createdAt;
    private Instant editedAt;
    //TODO milestone dto로 바꾸기
    private Milestone milestone;
    private List<LabelDto> labelList;
    private List<CommentDto> commentList;

}
