package com.team6.issue_tracker.global.auth.controller;

import com.team6.issue_tracker.auth.config.GithubOAuthProperties;
import com.team6.issue_tracker.auth.domain.GithubUser;
import com.team6.issue_tracker.auth.dto.GithubAccessToken;
import com.team6.issue_tracker.auth.dto.GithubAccessTokenRequest;
import com.team6.issue_tracker.domain.member.service.MemberService;
import com.team6.issue_tracker.global.auth.service.GithubOAuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class GithubLoginController {

    private final GithubOAuthProperties githubOAuthProperties;
    private final GithubOAuthService oAuthServices;

    public GithubLoginController(GithubOAuthProperties githubOAuthProperties, GithubOAuthService oAuthServices) {
        this.githubOAuthProperties = githubOAuthProperties;
        this.oAuthServices = oAuthServices;
    }

    @GetMapping("/oauth/result")
    public GithubUser loginViaGithub(String code) {
        GithubAccessTokenRequest githubAccessTokenRequest = new GithubAccessTokenRequest(githubOAuthProperties, code);
        GithubAccessToken githubAccessToken = oAuthServices.requestAccessToken(githubAccessTokenRequest);
        GithubUser githubUser = oAuthServices.requestUserInfo(githubAccessToken);

        //TODO 로그인 처리
//        member = loginService.login(member);

        //TODO 토큰 jwt 처리
//        String jwtAccessToken = jwtTokenProvider.issueAccessToken(member);

        //TODO header에 토큰 넣기
        return githubUser;
    }

}
