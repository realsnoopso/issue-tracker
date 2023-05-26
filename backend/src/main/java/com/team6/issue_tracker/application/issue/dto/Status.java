package com.team6.issue_tracker.application.issue.dto;

public enum Status {
    OPEN, CLOSE;

    public static Status of(Boolean isOpen) {
        if (isOpen) {
            return OPEN;
        }
        return CLOSE;
    }
}
