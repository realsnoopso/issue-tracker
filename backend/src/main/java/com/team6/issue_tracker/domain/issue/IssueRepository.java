package com.team6.issue_tracker.domain.issue;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long>, PagingAndSortingRepository<Issue, Long> {

    Page<Issue> findAllByIsDeletedAndIsOpen(Boolean isDeleted, Boolean isOpen, Pageable pageable);

    Integer countAllByIsDeletedAndIsOpen(Boolean isDeleted, Boolean isOpen);

    @Query(value = "SELECT i.issue_idx, i.title, i.contents, i.is_open, i.created_at, i.edited_at," +
            "i.milestone_idx, i.writer, i.assignee, i.is_deleted " +
            "FROM issue i " +
            "WHERE (:isOpen IS NULL OR i.is_open = :isOpen) " +
            "AND (:milestoneIdx IS NULL OR i.milestone_idx = :milestoneIdx) " +
            "AND (:writer IS NULL OR i.writer = :writer) " +
            "AND (:assignee IS NULL OR i.assignee = :assignee) " +
            "ORDER BY i.issue_idx DESC " +
            "LIMIT :pageSize OFFSET :offset")
    List<Issue> findAllBy(@Param("isOpen") Boolean isOpen,
                          @Param("milestoneIdx") Long milestoneIdx,
                          @Param("writer") Long writer,
                          @Param("assignee") Long assignee,
                          @Param("labelIdx") List<Long> labelIdx,
                          @Param("pageSize") int pageSize,
                          @Param("offset") int offset);

}