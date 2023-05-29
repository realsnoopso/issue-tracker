package com.team6.issue_tracker.application.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public List<Comment> getCommentsOnIssue(Long issueIdx) {
        return commentRepository.findAllByIssueIdx(AggregateReference.to(issueIdx));
    }
    
}
