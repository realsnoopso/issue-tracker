package com.team6.issue_tracker.application.page.dto;

import com.team6.issue_tracker.application.issue.dto.IssueDto;
import com.team6.issue_tracker.application.label.Label;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import com.team6.issue_tracker.application.milestone.Milestone;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data @Builder
public class IssuePageResponse {
    private Integer openIssueCount;
    private Integer closedIssueCount;
    private Integer page;
    private Integer maxPage;
    private List<IssueDto> issuesList;
    private List<Label> labelList;
    private List<Milestone> milestoneList;
    private List<MemberDto> userList;

}
