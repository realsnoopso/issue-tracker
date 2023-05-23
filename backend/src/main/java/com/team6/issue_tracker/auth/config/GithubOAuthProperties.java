package com.team6.issue_tracker.auth.config;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
@RequiredArgsConstructor
public class GithubOAuthProperties {

    @Value("${spring.security.oauth2.client.registration.github.clientId}")
    private final String clientId;

    @Value("${spring.security.oauth2.client.registration.github.clientSecret}")
    private final String clientSecret;

    @Value("${spring.security.oauth2.client.registration.github.redirectUri}")
    private final String redirectUri;

}
