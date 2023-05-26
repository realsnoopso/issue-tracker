package com.team6.issue_tracker.application.label.dto;

import com.team6.issue_tracker.application.label.Label;
import lombok.Data;

@Data
public class LabelDto {
    private Long labelIdx;
    private String title;
    private String backgroundColor;
    private String textColor;

    public LabelDto(Long labelIdx, String title, String backgroundColor, String textColor) {
        this.labelIdx = labelIdx;
        this.title = title;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    public static LabelDto of(Label l) {
        return new LabelDto(l.getLabelIdx(), l.getTitle(), l.getBackgroundColor(), l.getTextColor());
    }
}
