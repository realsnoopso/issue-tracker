package com.team6.issue_tracker.label;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabelRepository extends CrudRepository<Label, Long> {
    @Query("SELECT * FROM label WHERE is_deleted=false;")
    Iterable<Label> findAllNotDeleted();
}
