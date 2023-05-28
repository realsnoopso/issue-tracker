package com.team6.issue_tracker.global.auth;

import com.team6.issue_tracker.auth.config.GithubOAuthProperties;
import com.team6.issue_tracker.auth.domain.GithubUser;
import com.team6.issue_tracker.auth.dto.GithubAccessToken;
import com.team6.issue_tracker.auth.dto.GithubAccessTokenRequest;
import com.team6.issue_tracker.domain.member.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class GithubLoginController {
    // login 요청 url
    // https://github.com/login/oauth/authorize?client_id=ded3580dcda54e46b774&redirect_uri=http://localhost:8080/oauth/result&scope=user
    // Redirect
    // http://localhost:8080/oauth/result?code=e2b73a0322cc4b86a685

    private final GithubOAuthProperties githubOAuthProperties;
    private final MemberService memberService;
    private final GithubOAuthService oAuthServices;

    public GithubLoginController(GithubOAuthProperties githubOAuthProperties, MemberService memberService, GithubOAuthService oAuthServices) {
        this.githubOAuthProperties = githubOAuthProperties;
        this.memberService = memberService;
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
