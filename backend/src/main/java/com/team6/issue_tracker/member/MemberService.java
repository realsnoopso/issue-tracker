package com.team6.issue_tracker.member;

import com.team6.issue_tracker.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@AllArgsConstructor
public class MemberService {
    private MemberRepository memberRepository;

    public void join(Member member) {
        memberRepository.save(member);
    }

    public Optional<Member> findById(Long index) {
        return memberRepository.findById(index);
    }
}
