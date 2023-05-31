package com.team6.issue_tracker.global.auth.controller;

import com.team6.issue_tracker.domain.member.service.MemberService;
import com.team6.issue_tracker.global.auth.config.GithubOAuthPropertiesProd;
import com.team6.issue_tracker.global.auth.config.GithubOAuthPropertiesDev;
import com.team6.issue_tracker.global.auth.domain.GithubUser;
import com.team6.issue_tracker.global.auth.dto.GithubAccessToken;
import com.team6.issue_tracker.global.auth.dto.GithubAccessTokenRequest;
import com.team6.issue_tracker.global.auth.service.GithubOAuthService;
import com.team6.issue_tracker.global.auth.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class GithubLoginController {

    private final String ENV_PROD = "prod";
    private final String ENV_DEV = "dev";

    private final GithubOAuthPropertiesProd githubOAuthPropertiesProd;
    private final GithubOAuthPropertiesDev githubOAuthPropertiesDev;
    private final MemberService memberService;
    private final GithubOAuthService oAuthServices;
    private final JwtService jwtService;

    @GetMapping("/oauth/result") // 500 에러
    public ResponseEntity<?> loginViaGithub(String code, String env) {
        log.info("[OAuth called]");
        log.info("code = {} env = {}", code, env);
        GithubAccessTokenRequest githubAccessTokenRequest = null;
        if (env.equalsIgnoreCase(ENV_DEV)) {
            githubAccessTokenRequest = new GithubAccessTokenRequest(githubOAuthPropertiesDev, code);
        } else if (env.equalsIgnoreCase(ENV_PROD)) {
            githubAccessTokenRequest = new GithubAccessTokenRequest(githubOAuthPropertiesProd, code);
        }

        log.debug("githubAccessTokenRequest = {}", githubAccessTokenRequest);
        GithubAccessToken githubAccessToken = oAuthServices.requestAccessToken(githubAccessTokenRequest);
        log.debug("githubAccessToken = {}", githubAccessToken);
        GithubUser githubUser = oAuthServices.requestUserInfo(githubAccessToken);
        log.debug("githubUser = {}", githubUser);
        //TODO 로그인 처리
//        member = loginService.login(member);

        //토큰 jwt 처리
        String jwtToken = jwtService.createToken(githubUser);
//        String jwtAccessToken = jwtTokenProvider.issueAccessToken(member);

        //header, body에 토큰 넣고 반환
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + jwtToken);

        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("message", "login success");
        responseBody.put("token", jwtToken);
        return new ResponseEntity<>(responseBody, headers, HttpStatus.OK);
    }
}
