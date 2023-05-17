package com.team6.issue_tracker.member.domain.dto;

import lombok.Getter;

@Getter
public class TestMemberDto {
    private String name;
    private String profile;

    public TestMemberDto(String name, String profile) {
        this.name = name;
        this.profile = profile;
    }
}
