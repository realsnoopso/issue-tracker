package com.team6.issue_tracker.member.domain;

import java.util.Date;
import java.util.List;

public class Issue {
    private String issueId;
    private String title;
    private List<Comment> comment;
    private Member writer;
    private Member assignee;
    private Label label;
    private Milestone milestone;
    private String status;
    private Date editedTime;
    private int index;

}
