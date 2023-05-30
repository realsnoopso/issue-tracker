package com.team6.issue_tracker.domain.model;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Status {
    OPEN, CLOSE;

    @JsonCreator
    public static Status getEnumFromValue(String value) {
        try {
            return Status.valueOf(value.toUpperCase());
        } catch (Exception e) {
            return null;
        }
    }

    public static Status of(boolean isOpen) {
        if (isOpen) {
            return OPEN;
        }
        return CLOSE;
    }
}
