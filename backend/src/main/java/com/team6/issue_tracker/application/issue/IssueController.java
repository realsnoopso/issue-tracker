package com.team6.issue_tracker.application.issue;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

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
            summary = "이슈 작성",
            tags = "issue",
            description = "사용자는 원하는 이슈를 다중 선택하여 담당자를 변경할 수 있다."
            description = "사용자는 새로운 이슈를 작성할 수 있다."
    )
    @PatchMapping("/{issueId}/assignee")
    public void updateIssueAssignee() {
    @PostMapping("")
    public void postNewIssue(NewIssueRequest request) {
        //TODO 유저 권한 검사
        //TODO 유효성 검사
        issueService.saveNewIssue(request.toIssue());
    }

    @Operation(
            summary = "이슈 내용 수정",
            tags = "issue",
            description = "사용자는 이슈 내용을  수정할 수 있다."
    )
    @PutMapping("/{issueId}")
    public void updateIssueContents(IssueDetail issueDetail) {
        Issue updatedIssue = issueDetail.fromDto(issueDetail);
        issueService.updateIssue(updatedIssue);
    }
}
