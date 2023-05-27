package com.team6.issue_tracker.domain.member;

public enum GithubState {
    SYNC(true), NONE(false);

    private final Boolean state;

    GithubState(Boolean state) {
        this.state = state;
    }

    public static GithubState of (Boolean b) {
        if (b) {
            return SYNC;
        }
        return NONE;
    }
}
