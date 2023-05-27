package com.team6.issue_tracker.domain.issue.dto;

import com.team6.issue_tracker.domain.comment.dto.CommentDto;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
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
