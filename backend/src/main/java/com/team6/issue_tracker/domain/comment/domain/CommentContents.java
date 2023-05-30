package com.team6.issue_tracker.domain.comment.domain;

import lombok.Getter;
import lombok.Value;

import javax.validation.constraints.NotNull;

@Value
@Getter
public class CommentContents {

    @NotNull
    String contents;

    public CommentContents(String contents) {
        this.contents = contents;
    }

}
