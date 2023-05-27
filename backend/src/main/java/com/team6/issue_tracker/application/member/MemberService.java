package com.team6.issue_tracker.application.member;

import com.team6.issue_tracker.application.member.domain.Member;
import com.team6.issue_tracker.application.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public void join(Member member) {
        memberRepository.save(member);
    }

    public Optional<Member> findById(Long index) {
        return memberRepository.findById(index);
    }

    public Map<Long, MemberDto> getAllMembers() {
        Map<Long, MemberDto> memberDtos = new HashMap<>();
        Iterable<Member> member = memberRepository.findAll();
        member.forEach(m -> memberDtos.put(m.getMemberIdx(), MemberDto.from(m)));
        return memberDtos;
    }
}
