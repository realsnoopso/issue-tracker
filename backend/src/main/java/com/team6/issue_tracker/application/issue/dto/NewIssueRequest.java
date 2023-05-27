package com.team6.issue_tracker.domain.issue.dto;

import com.team6.issue_tracker.domain.label.dto.LabelDto;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.milestone.Milestone;
import lombok.Data;

import java.util.List;

@Data
public class NewIssueRequest {
    private String title;
    private String contents;
    private MemberDto writer;
    private MemberDto assignee;
    private List<LabelDto> labels;
    private Milestone milestone;
}
