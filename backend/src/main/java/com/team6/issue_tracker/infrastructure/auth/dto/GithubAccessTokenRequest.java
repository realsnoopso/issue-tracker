package com.team6.issue_tracker.auth.dto;

import com.team6.issue_tracker.auth.config.AuthConst;
import com.team6.issue_tracker.auth.config.GithubOAuthProperties;
import lombok.Getter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Getter
public class GithubAccessTokenRequest {

    private final String code;
    private final String clientId;
    private final String clientSecret;
    private final String redirectUri;

    public GithubAccessTokenRequest(GithubOAuthProperties githubOAuthProperties, String code) {
        this.code = code;
        this.clientId = githubOAuthProperties.getClientId();
        this.clientSecret = githubOAuthProperties.getClientSecret();
        this.redirectUri = githubOAuthProperties.getRedirectUri();
    }

    public MultiValueMap<String, String> getParams() {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add(AuthConst.CLIENT_ID, clientId);
        queryParams.add(AuthConst.CLIENT_SECRET, clientSecret);
        queryParams.add(AuthConst.CODE, code);
        queryParams.add(AuthConst.REDIRECT_URI, redirectUri);
        return queryParams;
    }
}
