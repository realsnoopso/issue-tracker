package com.team6.issue_tracker.application.comment;

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
