package com.team6.issue_tracker.domain.member.service;

import com.fasterxml.jackson.databind.util.ArrayIterator;
import com.team6.issue_tracker.domain.member.domain.Member;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.member.repository.MemberRepository;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public void join(Member member) {
        memberRepository.save(member);
    }

    public Member findById(Long index) {
        return memberRepository.findById(index).orElseThrow();
    }

    public Map<Long, MemberDto> getAllMembers() {
        Map<Long, MemberDto> memberDtos = new HashMap<>();
        Iterable<Member> member = memberRepository.findAll();
        member.forEach(m -> memberDtos.put(m.getMemberIdx(), MemberDto.from(m)));
        return memberDtos;
    }

    public Map<Long, Member> findMembers(AggregateReference<Member, Long> writer, AggregateReference<Member, Long> assignee) {
        Map<Long, Member> memberMap = new HashMap<>();
        memberRepository.findAllById(new ArrayIterator<>(new Long[]{writer.getId(), assignee.getId()}))
                .forEach(member -> memberMap.put(member.getMemberIdx(), member));
        return memberMap;
    }
}
