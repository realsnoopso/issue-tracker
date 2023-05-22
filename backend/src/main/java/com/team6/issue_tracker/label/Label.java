package com.team6.issue_tracker.label;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Getter @Builder
@Table("label")
public class Label {
    @Id
    private Long labelIdx;

    private String title;

    private String description;

    private String backgroundColor;

    private String textColor;

    @Column("deleted")
    private boolean isDeleted;

    @PersistenceCreator
    public Label(Long labelIdx, String title, String description, String backgroundColor, String textColor, boolean isDeleted) {
        this.labelIdx = labelIdx;
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.isDeleted = isDeleted;
    }
}
