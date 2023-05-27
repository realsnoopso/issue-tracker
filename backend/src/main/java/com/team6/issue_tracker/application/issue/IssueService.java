package com.team6.issue_tracker.application.issue;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    private final CommentService commentService;
    private final MemberService memberService;
    private final LabelService labelService;
    private final MilestoneService milestoneService;

    public Integer getOpenIssueNum() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, true);
    }

    public Integer getClosedIssueNum() {
        return issueRepository.countAllByIsDeletedAndIsOpen(false, false);
    }

}
