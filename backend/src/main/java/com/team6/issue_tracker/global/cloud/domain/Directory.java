package com.team6.issue_tracker.global.cloud.domain;

import lombok.Getter;

@Getter
public enum Directory {
    ISSUE("image/"),
    MEMBER("profile/");

    private final String prefix;

    Directory(String prefix) {
        this.prefix = prefix;
    }
}
