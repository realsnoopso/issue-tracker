package com.team6.issue_tracker.application.issue;

import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.issue.dto.IssueDto;
import com.team6.issue_tracker.application.issue.dto.IssueListRequest;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/issue")
@RestController
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @Operation(
            summary = "",
            tags = "issue",
            description = "사용자는 이슈 목록을 필터링하여 볼 수 있다."
    )
    @GetMapping("")
    public IssueDto findAllIssueOpenList(IssueListRequest requestParams) {
        Pageable page = PageRequest.of(requestParams.getPage(), 10, Sort.Direction.DESC, "issue_idx");
        List<Issue> findAPage = issueService.findAllByfilter(page, requestParams.toFilter());

        //TODO 작성자 찾기

        //TODO 담당자 찾기
        //TODO 라벨 찾기
//        return IssueListResponse.builder()
//                .issuesList();
        return null;
    }

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
