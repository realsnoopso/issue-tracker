package com.team6.issue_tracker.comment.domain;

import lombok.Getter;
import lombok.Value;

@Value
@Getter
public class CommentContents {
    String contents;

    public CommentContents(String contents) {
        this.contents = contents;
    }
}
