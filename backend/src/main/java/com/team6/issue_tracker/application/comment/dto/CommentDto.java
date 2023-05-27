package com.team6.issue_tracker.application.comment.dto;

import com.team6.issue_tracker.application.comment.Comment;
import com.team6.issue_tracker.application.member.domain.Member;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import java.time.Instant;

@Data @Builder
@AllArgsConstructor
public class CommentDto {

    private Long commentIdx;
    private String contents;
    private MemberDto writer;
    private Instant createdAt;
    private Instant editedAt;

    public static CommentDto fromComment(Comment comment, Member writer) {
        return CommentDto.builder()
                .commentIdx(comment.getCommentIdx())
                .contents(comment.getContents().getContents())
                .createdAt(comment.getCreatedAt())
                .editedAt(comment.getEditedAt())
                .writer(MemberDto.from(writer))
                .build();
    }
}
