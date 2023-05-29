package com.team6.issue_tracker.domain.issue;

import com.team6.issue_tracker.domain.issue.dto.IssueDetail;
import com.team6.issue_tracker.domain.issue.dto.NewIssueRequest;
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
            summary = "이슈 작성",
            tags = "issue",
            description = "사용자는 새로운 이슈를 작성할 수 있다."
    )
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
        //TODO 유저 권한 검사
        //TODO 유효성 검사
        Issue updatedIssue = issueDetail.fromDto(issueDetail);
        issueService.updateIssue(updatedIssue);
    }
}
