package com.team6.issue_tracker.member.domain.dto;

import com.team6.issue_tracker.member.domain.Member;
import lombok.Getter;

import java.util.Date;
import java.util.List;

@Getter
public class TestIssueDto {
    private int issueId;
    private String title;
    private List<TestCommentDto> comment;
    private TestMemberDto assignee;
    private List<TestLabelDto> label;
    private TestMilestoneDto milestone;
    private String status;
    private Date editedTime;

    public TestIssueDto(int issueId, String title, List<TestCommentDto> comment, TestMemberDto assignee, List<TestLabelDto> label, TestMilestoneDto milestone, String status, Date editedTime) {
        this.issueId = issueId;
        this.title = title;
        this.comment = comment;
        this.assignee = assignee;
        this.label = label;
        this.milestone = milestone;
        this.status = status;
        this.editedTime = editedTime;
    }
}
