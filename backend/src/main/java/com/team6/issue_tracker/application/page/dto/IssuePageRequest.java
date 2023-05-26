package com.team6.issue_tracker.application.page.dto;

import com.team6.issue_tracker.application.issue.dto.Status;
import com.team6.issue_tracker.application.issue.sql.IssueFilterProvider;
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
    private List<Long> label;

    public IssueFilterProvider toFilter() {
        return IssueFilterProvider.builder()
                .isOpen(status==Status.OPEN)
                .writer(writer)
                .assignee(assignee)
                .mailestoneIdx(milestone)
                .label(label)
                .build();
    }
}
