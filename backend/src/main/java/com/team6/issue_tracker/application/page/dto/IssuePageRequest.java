package com.team6.issue_tracker.application.page.dto;

import com.team6.issue_tracker.application.issue.dto.Status;
import com.team6.issue_tracker.application.issue.IssueFilter;
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
        return IssueFilter.builder()
                .isOpen(status==Status.OPEN)
                .page(page)
                .writer(writer)
                .assignee(assignee)
                .mailestone(milestone)
                .label(label)
                .commentBy(commentBy)
                .build();
    }
}
