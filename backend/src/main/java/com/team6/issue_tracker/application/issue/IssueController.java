package com.team6.issue_tracker.application.issue;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

@RestController
public class IssueController {

    @Operation(
            summary = "",
            tags = "issue",
            description = "사용자는 원하는 이슈를 다중 선택하여 상태를 변경할 수 있다."
    )
    @PutMapping("")
    public void updateAllIssueIsOpen() {

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
