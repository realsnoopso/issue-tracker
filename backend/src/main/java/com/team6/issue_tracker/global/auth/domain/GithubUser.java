package com.team6.issue_tracker.global.auth.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.Map;

@Getter
@ToString
@Builder
public class GithubUser {

    @JsonProperty("login")
    private String login;

    @JsonProperty("avatar_url")
    private String avatarUrl;

    @JsonProperty("id")
    private Integer id;

    public GithubUser() {
    }

    public GithubUser(String login, String avatarUrl, Integer id) {
        this.login = login;
        this.avatarUrl = avatarUrl;
        this.id = id;
    }

    public static GithubUser from(Map<String, String> githubUserParams) {
        return new GithubUser(githubUserParams.get("login"), githubUserParams.get("avatar_url"), Integer.parseInt(githubUserParams.get("id")));
    }

}
