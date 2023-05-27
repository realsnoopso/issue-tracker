package com.team6.issue_tracker.application.issue;

import com.team6.issue_tracker.application.issue.dto.IssueDetail;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/issue")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @Operation(
            summary = "이슈 상세 보기",
            tags = "issue",
            description = "사용자는 이슈 상세 정보를 볼 수 있다."
    )
    @GetMapping("/{issueIdx}")
    public IssueDetail getIssueDetails(@PathVariable("issueIdx") Long issueIdx) {
        return issueService.findById(issueIdx);
    }

    @Operation(
            summary = "",
            tags = "issue",
            description = "사용자는 원하는 이슈를 다중 선택하여 담당자를 변경할 수 있다."
    )
    @PatchMapping("/{issueId}/assignee")
    public void updateIssueAssignee() {

    }
}
