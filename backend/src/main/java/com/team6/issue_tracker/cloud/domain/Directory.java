package com.team6.issue_tracker.cloud.domain;

import lombok.Getter;

@Getter
public enum Directory {
    ISSUE("image/"),
    MEMBER("profile/");

    private String prefix;

    Directory(String prefix) {
        this.prefix = prefix;
    }
}
