package com.team6.issue_tracker.application.page.dto;

import com.team6.issue_tracker.application.label.dto.LabelDto;
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
    private Integer openIssueMaxPage;
    private Integer closeIssueMaxPage;
    private List<IssueDto> issuesList;
    private List<LabelDto> labelList;
    private List<Milestone> milestoneList;
    private List<MemberDto> userList;

}
