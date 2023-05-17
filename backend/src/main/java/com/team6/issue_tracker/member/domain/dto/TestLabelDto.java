package com.team6.issue_tracker.member.domain.dto;

import lombok.Getter;

@Getter
public class TestLabelDto {
    private String title;
    private String description;
    private String style;

    public TestLabelDto(String title, String description, String style) {
        this.title = title;
        this.description = description;
        this.style = style;
    }
}
