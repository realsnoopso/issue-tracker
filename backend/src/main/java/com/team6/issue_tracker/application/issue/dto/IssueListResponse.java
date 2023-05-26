package com.team6.issue_tracker.application.issue.dto;

import com.team6.issue_tracker.application.label.dto.LabelDto;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data @Builder
public class IssueListResponse {
    private Long openIssueCount;
    private Long closedIssueCount;
    private Long page;
    private Long maxPage;
    private Page<IssueDto> issuesList;
    private List<LabelDto> labelList;
//    List<Milestone> milestoneList;
    private List<MemberDto> userList;

}
