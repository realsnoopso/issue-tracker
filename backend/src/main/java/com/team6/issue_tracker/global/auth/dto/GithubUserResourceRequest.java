package com.team6.issue_tracker.auth.dto;

import com.team6.issue_tracker.auth.config.AuthConst;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

public class GithubUserResourceRequest {
    private final String HEADER = "Authorization";
    private final String KEY = "token";

    private GithubAccessToken token;

    public GithubUserResourceRequest(GithubAccessToken token) {
        this.token = token;
    }

    public MultiValueMap<String, String> getParams() {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add(HEADER, token.authorizationHeaderValue());
        return queryParams;
    }
}
