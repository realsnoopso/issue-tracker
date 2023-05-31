package com.team6.issue_tracker.global.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.team6.issue_tracker.global.auth.domain.GithubUser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {
    @Value("${JWT.SECRET}")
    private String secret;
    private static final long JWT_TOKEN_VALIDITY = 36000;

    public String createToken(GithubUser githubUser) {
        return Jwts.builder()
                .setSubject("github_login_member")
                .setHeaderParam("typ", "JWT")
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .claim("userprofile", githubUser)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public ResponseEntity<?> createResponse(String jwtToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + jwtToken);

        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("message", "login success");
        responseBody.put("token", jwtToken);
        return new ResponseEntity<>(responseBody, headers, HttpStatus.OK);
    }

    public String getAccountNameFromToken(String token) {
        return JWT.require(Algorithm.HMAC512(secret)).build().verify(token).getClaim("issuetracker").asString();
    }
}
