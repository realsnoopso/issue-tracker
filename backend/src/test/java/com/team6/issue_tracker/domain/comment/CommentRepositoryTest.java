package com.team6.issue_tracker.domain.comment;

import com.team6.issue_tracker.domain.comment.domain.Comment;
import com.team6.issue_tracker.domain.comment.repository.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@DataJdbcTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CommentRepositoryTest {

    @Autowired
    CommentRepository commentRepository;

    @Test
    @DisplayName("Comment Id로 comment를 찾을 수 있다.")
    void findById() throws Exception{
        //given
        Comment comment = commentRepository.findById(1L).orElseThrow();

        //when
        log.debug("comment = {}", comment);

        //then
        assertThat(comment.getContents().getContents()).isEqualTo("test comment");
    }
    
    @Test
    @DisplayName("Comment 를 Repository에 저장할 수 있다.")
    void saveComment() throws Exception{
        //given
        Comment testComment = Comment.newComment("testComment", 1L, 2L);

        //when
        Comment save = commentRepository.save(testComment);

        //then
        assertThat(save.getContents().getContents()).isEqualTo("testComment");
    }

    @Test
    @DisplayName("Comment 를 Repository에 저장하면, Repository Count가 1 증가한다.")
    void saveAtRepository() throws Exception{
        //given
        long count = commentRepository.count();

        //when
        Comment testComment = Comment.newComment("testComment", 1L, 2L);
        commentRepository.save(testComment);

        //then
        assertThat(commentRepository.count()).isEqualTo(count + 1);
    }
}
