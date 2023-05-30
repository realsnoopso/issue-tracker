package com.team6.issue_tracker.domain.issue.service;

import com.team6.issue_tracker.domain.issue.domain.Issue;
import com.team6.issue_tracker.domain.issue.repository.IssueRepository;
import com.team6.issue_tracker.domain.model.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IssueUpdateService {

    private final IssueRepository issueRepository;

    public Issue updateIssue(Issue updatedIssue) {
        return issueRepository.save(updatedIssue);
    }

    public boolean updateIssuesStatus(List<Long> issueIdx, Status status) {
        return issueRepository.updateIssuesIsOpen(status == Status.OPEN, issueIdx);
    }
}
