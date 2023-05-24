package com.team6.issue_tracker.member;

import com.team6.issue_tracker.member.MemberRepository;
import com.team6.issue_tracker.member.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    private MemberRepository memberRepository;

    @Autowired
    public MemberController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @GetMapping("/testmember")
    public Member tetsMember() {
       return memberRepository.findById(1L).orElseThrow();
    }
}
