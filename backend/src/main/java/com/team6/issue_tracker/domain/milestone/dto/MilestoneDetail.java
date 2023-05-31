package com.team6.issue_tracker.domain.milestone.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.Instant;

@Getter
@Builder
public class MilestoneDetail {
    private Long milestoneIdx;
    private String title;
    private Instant endDate;
    private String contents;
    private Long totalIssueNum;
    private Long closedIssueNum;
}
