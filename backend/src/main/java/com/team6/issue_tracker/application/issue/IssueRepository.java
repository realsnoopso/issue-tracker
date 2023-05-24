package com.team6.issue_tracker.application.issue;

import com.team6.issue_tracker.application.issue.domain.Issue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {
}
