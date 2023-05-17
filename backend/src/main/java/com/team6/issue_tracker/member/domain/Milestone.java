package com.team6.issue_tracker.member.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Milestone {
    private String id;
    private String title;
    private Date endDate;
    private String contents;
    private int totalIssueNum;
    private int closedIssueNum;
    private boolean isClosed;

    public Milestone(String id, String title, Date endDate, String contents, int totalIssueNum, int closedIssueNum, boolean isClosed) {
        this.id = id;
        this.title = title;
        this.endDate = endDate;
        this.contents = contents;
        this.totalIssueNum = totalIssueNum;
        this.closedIssueNum = closedIssueNum;
        this.isClosed = isClosed;
    }
}
