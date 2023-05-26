package com.team6.issue_tracker.application.member;

import com.team6.issue_tracker.application.member.domain.Member;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends CrudRepository<Member, Long> {
}