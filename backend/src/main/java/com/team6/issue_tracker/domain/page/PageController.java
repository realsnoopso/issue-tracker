package com.team6.issue_tracker.domain.page;

import com.team6.issue_tracker.domain.page.dto.IssuePageRequest;
import com.team6.issue_tracker.domain.page.dto.IssuePageResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class PageController {

    private final PageService pageService;

    @Operation(
            summary = "이슈 목록",
            tags = "issue page",
            description = "사용자는 이슈 목록을 필터링하여 볼 수 있다."
    )
    @GetMapping("/issue")
    public IssuePageResponse findAllIssueOpenList(IssuePageRequest requestParams) {
        return pageService.getAPage(requestParams.getPage(), requestParams.toFilter());
    }
}
