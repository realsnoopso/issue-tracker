package com.team6.issue_tracker.member.domain.dto;

import com.team6.issue_tracker.member.domain.Member;
import lombok.Getter;

@Getter
public class TestCommentDto {
    private TestMemberDto writer;
    private String contents;

    public TestCommentDto(TestMemberDto writer, String contents) {
        this.writer = writer;
        this.contents = contents;
    }
}
