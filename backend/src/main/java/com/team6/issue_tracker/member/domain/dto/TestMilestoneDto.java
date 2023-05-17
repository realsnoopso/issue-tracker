package com.team6.issue_tracker.member.domain.dto;

import lombok.Getter;

import java.util.Date;
@Getter
public class TestMilestoneDto {
    private int id;
    private String title;
    private Date endDate;
    private String contents;
    private int totalIssueNum;
    private int closedIssueNum;
    private boolean isClosed;

    public TestMilestoneDto(int id, String title, Date endDate, String contents, int totalIssueNum, int closedIssueNum, boolean isClosed) {
        this.id = id;
        this.title = title;
        this.endDate = endDate;
        this.contents = contents;
        this.totalIssueNum = totalIssueNum;
        this.closedIssueNum = closedIssueNum;
        this.isClosed = isClosed;
    }
}
