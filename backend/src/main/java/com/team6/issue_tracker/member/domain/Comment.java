package com.team6.issue_tracker.member.domain;

public class Comment {
    private Member writer;
    private String contents;

    public Comment(Member writer, String contents) {
        this.writer = writer;
        this.contents = contents;
    }
}
