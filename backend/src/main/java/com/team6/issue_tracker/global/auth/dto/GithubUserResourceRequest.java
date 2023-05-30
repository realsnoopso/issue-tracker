package com.team6.issue_tracker.global.auth.dto;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

public class GithubUserResourceRequest {
    private final String HEADER = "Authorization";
    private final String KEY = "token";

    private final GithubAccessToken token;

    public GithubUserResourceRequest(GithubAccessToken token) {
        this.token = token;
    }

    public MultiValueMap<String, String> getParams() {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add(HEADER, token.authorizationHeaderValue());
        return queryParams;
    }
}
