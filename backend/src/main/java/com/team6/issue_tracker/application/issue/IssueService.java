package com.team6.issue_tracker.application.issue;

import com.team6.issue_tracker.application.issue.domain.Issue;
import com.team6.issue_tracker.application.issue.sql.IssueFilterProvider;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<Issue> findAllByfilter(Pageable page, IssueFilterProvider filter) {
        return issueRepository.findAllByFilter(
                filter.getIsOpen(),
                filter.getMailestoneIdx(),
                filter.getWriter(),
                filter.getAssignee(),
                filter.getLabel()
        );
    }
}
