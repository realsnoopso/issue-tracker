package com.team6.issue_tracker.member.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Label {
    private String title;
    private String description;
    private String backgroundColor;
    private String textColor;
    private String style;

    public Label(String title, String description, String backgroundColor, String textColor, String style) {
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.style = style;
    }
}
