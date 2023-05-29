package com.team6.issue_tracker.domain.milestone.repository;

import com.team6.issue_tracker.domain.milestone.domain.Milestone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import java.util.List;

@Repository
public interface MilestoneRepository extends CrudRepository<Milestone, @NotNull Long> {

   List<Milestone> findAllByIsDeletedFalse();

}
