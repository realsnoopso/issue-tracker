package com.team6.issue_tracker.global.config;

import com.team6.issue_tracker.auth.config.GithubOAuthProperties;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GithubOAuthConfig {

    @Value("${spring.security.oauth2.client.registration.github.clientId}")
    String clientId;

    @Value("${spring.security.oauth2.client.registration.github.clientSecret}")
    String clientSecret;

    @Value("${spring.security.oauth2.client.registration.github.redirectUri}")
    String redirectUri;

    @Bean
    public GithubOAuthProperties githubOAuthProperties() {
        return new GithubOAuthProperties(clientId, clientSecret, redirectUri);
    }
}
