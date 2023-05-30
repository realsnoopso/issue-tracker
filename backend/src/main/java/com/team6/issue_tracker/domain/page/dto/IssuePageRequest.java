package com.team6.issue_tracker.domain.page.dto;

import com.team6.issue_tracker.domain.model.Status;
import lombok.Data;

import java.util.List;

@Data
public class IssuePageRequest {

    private Integer page;
    private Integer maxPageNum;
    private Status status;
    private Long milestone;
    private Long writer;
    private Long assignee;
    private List<Long> commentBy;
    private List<Long> label;

    public IssueFilter toFilter() {
        Boolean milestoneFlag = null;
        Boolean assigneeFlag = null;
        Boolean labelFlag = null;

        if (milestone != null && milestone < 0) {
            milestoneFlag = true;
            milestone = null;
        }

        if (assignee != null && assignee < 0) {
            assigneeFlag = true;
            assignee = null;
        }

        if (label != null && label.get(0) < 0) {
            labelFlag = true;
            label = null;
        }

        return IssueFilter.builder()
                .isOpen(status == Status.OPEN)
                .page(page)
                .writer(writer)
                .assignee(assignee)
                .assigneeEmptyFlag(assigneeFlag)
                .mailestone(milestone)
                .milestoneEmptyFlag(milestoneFlag)
                .label(label)
                .labelEmptyFlag(labelFlag)
                .commentBy(commentBy)
                .build();
    }
}
