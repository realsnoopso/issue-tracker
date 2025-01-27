package com.team6.issue_tracker.global.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.team6.issue_tracker.domain.member.dto.MemberDetail;
import com.team6.issue_tracker.global.auth.domain.GithubUser;
import com.team6.issue_tracker.global.util.ResponseMessage;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class JwtService {
    @Value("${JWT.SECRET}")
    private String secret;
    private static final long JWT_TOKEN_VALIDITY = 86400;

    public String createToken(MemberDetail user) {
        return Jwts.builder()
                .setSubject(user.getName())
                .setHeaderParam("typ", "JWT")
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .claim("userprofile", user)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public ResponseEntity<ResponseMessage<Map<String, String>>> createResponse(String jwtToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + jwtToken);

        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("message", "login success");
        responseBody.put("token", jwtToken);

        ResponseMessage<Map<String, String>> responseMessage =
                new ResponseMessage<>(HttpStatus.OK, "Login successful", responseBody);
        return responseMessage.toResponseEntityWithHeaders(headers);
    }

    public Authentication getAuthentication(String token) {
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(secret)
                .build()
                .parseClaimsJws(token)
                .getBody();

        log.info("클레임 확인 : " + claims.get("userprofile"));

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get("userprofile").toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User user = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(user, token, authorities);
    }

    public boolean validateToken(String token) {
        try {
            log.info("유효 토큰 예외 검증 시작 : " + token);
            log.info("유효 시크릿 예외 검증 시작 : " + secret);
            Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("잘못된 서명입니다.");
        } catch (ExpiredJwtException e) {
            log.info("만료된 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            log.info("지원하지 않는 토큰입니다.");
        } catch (IllegalArgumentException e) {
            log.info("토큰이 잘못 되었습니다.");
        }
        return false;
    }

    public String getAccountNameFromToken(String token) {
        return JWT.require(Algorithm.HMAC512(secret)).build().verify(token).getClaim("issuetracker").asString();
    }
}
