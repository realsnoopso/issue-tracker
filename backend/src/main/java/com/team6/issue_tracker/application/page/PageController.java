package com.team6.issue_tracker.application.page;

import com.team6.issue_tracker.application.issue.IssueService;
import com.team6.issue_tracker.application.issue.dto.IssueDto;
import com.team6.issue_tracker.application.milestone.Milestone;
import com.team6.issue_tracker.application.milestone.MilestoneService;
import com.team6.issue_tracker.application.page.dto.IssuePageRequest;
import com.team6.issue_tracker.application.page.dto.IssuePageResponse;
import com.team6.issue_tracker.application.label.LabelService;
import com.team6.issue_tracker.application.member.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class PageController {

    private final PageService pageService;
    private final IssueService issueService;
    private final MemberService memberService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    public PageController(PageService pageService,
                          IssueService issueService,
                          MemberService memberService,
                          LabelService labelService,
                          MilestoneService milestoneService) {
        this.pageService = pageService;
        this.issueService = issueService;
        this.memberService = memberService;
        this.labelService = labelService;
        this.milestoneService = milestoneService;
    }

    @Operation(
            summary = "",
            tags = "issue",
            description = "사용자는 이슈 목록을 필터링하여 볼 수 있다."
    )
    @GetMapping("/issue")
    public IssuePageResponse findAllIssueOpenList(IssuePageRequest requestParams) {

        List<IssueDto> issueList = pageService.findAllByfilter(requestParams.getPage(), requestParams.toFilter());

        return IssuePageResponse.builder()
                .issuesList(issueList)
                .openIssueCount(issueService.getOpenIssueNum())
                .closedIssueCount(issueService.getClosedIssueNum())
                .page(requestParams.getPage())
                .maxPage(pageService.getOpenIssueMaxPage())
                .userList(memberService.findAll())
                .labelList(labelService.findAll())
                .milestoneList(new ArrayList<>(pageService.getAllMilestone().values()))
                .build();
    }
}
