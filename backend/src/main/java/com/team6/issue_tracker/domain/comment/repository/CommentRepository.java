package com.team6.issue_tracker.domain.comment.repository;

import com.team6.issue_tracker.domain.comment.domain.Comment;
import com.team6.issue_tracker.domain.issue.domain.Issue;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long>, PagingAndSortingRepository<Comment, Long> {

    List<Comment> findAllByIssueIdx(AggregateReference<Issue, @NotNull Long> issueIdx);
}
