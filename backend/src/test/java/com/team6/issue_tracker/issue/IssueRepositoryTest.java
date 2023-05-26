package com.team6.issue_tracker.issue;

import com.team6.issue_tracker.application.issue.IssueRepository;
import com.team6.issue_tracker.application.issue.domain.Issue;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@DataJdbcTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class IssueRepositoryTest {

    @Autowired
    IssueRepository issueRepository;

    @Test
    @DisplayName("전체 이슈를 조회할 수 있다.")
    public void findAll() throws Exception{
        //when
        Iterable<Issue> all = issueRepository.findAll();

        //then
        assertThat(all).hasSize(4);
    }

    @Test
    @DisplayName("삭제되지 않고, 열린 상태인 이슈를 조회할 수 있다.")
    public void findAllNotDeletedIsOpenIssues() throws Exception{
        //given
        PageRequest page = PageRequest.of(0,10, Sort.by(Sort.Direction.DESC, "issue_idx"));

        //when
        Page<Issue> issues = issueRepository.findAllByIsDeletedAndIsOpen(false, true, page);

        //then
        assertThat(issues).hasSize(1);
    }

    @Test
    @DisplayName("삭제되지 않고, 열린 상태인 이슈를 페이지 크기 3인 첫번째 페이지를 조회할 수 있다.")
    public void findAllNotDeletedIsOpenIssuesWithPage() throws Exception{
        //given
        PageRequest page = PageRequest.of(0,3, Sort.Direction.DESC, "issue_idx");

        //when
        Page<Issue> issues = issueRepository.findAllByIsDeletedAndIsOpen(false, true, page);

        //then
        assertThat(issues).hasSize(1);
    }

    @Test
    @DisplayName("삭제되지 않고, 열린 상태인 이슈를 페이지 크기 1인 두번째 페이지를 조회할 수 있다.")
    public void findAllNotDeletedIsOpenIssuesWithSecondPage() throws Exception{
        //given
        PageRequest page = PageRequest.of(1,1, Sort.by(Sort.Direction.DESC, "issue_idx"));

        //when
        Page<Issue> issues = issueRepository.findAllByIsDeletedAndIsOpen(false, true, page);

        //then
        SoftAssertions.assertSoftly(softly -> {
            softly.assertThat(issues).hasSize(1);
            softly.assertThat(issues.get(0).getTitle()).isEqualTo("test issue");
        });
    }

    @Test
    @DisplayName("필터가 있는 경우, 조건에 맞는 issue를 조회할 수 있다.")
    public void findWithFilter() throws Exception{
        PageRequest page = PageRequest.of(1,1, Sort.by(Sort.Direction.DESC, "issue_idx"));
        //when
        List<Issue> allByFilter = issueRepository.findAllBy(true, null, 2L, null, null, 20, 1);

        //then
        assertThat(allByFilter).hasSize(2);
    }
}
