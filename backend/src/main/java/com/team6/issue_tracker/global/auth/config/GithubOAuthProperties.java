package com.team6.issue_tracker.global.auth.config;

import lombok.Getter;

@Getter
public class GithubOAuthProperties {

    String clientId;

    String clientSecret;

    String redirectUri;

    public GithubOAuthProperties(String clientId, String clientSecret, String redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
    }
}
