package com.team6.issue_tracker.domain.comment.controller;

import com.team6.issue_tracker.domain.comment.domain.Comment;
import com.team6.issue_tracker.domain.comment.dto.CreateCommentRequest;
import com.team6.issue_tracker.domain.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/issue/{issueIdx}")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment")
    public void createComment(@PathVariable("issueIdx") Long issueIdx, CreateCommentRequest request) {
        //TODO 유효성 검증
        commentService.saveComment(Comment.newComment(request.getContents(), issueIdx, request.getWriterIdx()));
    }
}
