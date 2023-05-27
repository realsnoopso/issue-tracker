package com.team6.issue_tracker.domain.member;

import com.team6.issue_tracker.domain.member.domain.Member;
import com.team6.issue_tracker.domain.member.dto.MemberDto;
import org.springframework.stereotype.Service;

import java.util.*;

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
}
