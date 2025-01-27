package com.team6.issue_tracker.domain.page.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueFilter {

    Boolean isOpen;
    Integer page;
    Long writer;
    Long assignee;
    List<Long> label;
    Long mailestone;
    List<Long> commentBy;

    Boolean milestoneEmptyFlag;
    Boolean assigneeEmptyFlag;
    Boolean labelEmptyFlag;

}
