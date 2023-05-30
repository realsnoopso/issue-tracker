package com.team6.issue_tracker.global.util;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.Param;

import java.util.List;

@NoRepositoryBean
public interface SoftDeleteCrudRepository <T, Long> extends CrudRepository<T, Long> {

    @Modifying
    public void softDeleteById(@Param("id") Long id);

    @Override
    @Query("select * from #{#entityName} e where e.is_deleted=false")
    public List<T> findAll();
}
