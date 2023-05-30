package com.team6.issue_tracker.domain.member.controller;

import com.team6.issue_tracker.domain.member.dto.MemberDto;
import com.team6.issue_tracker.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/members")
    public List<MemberDto> findAll(int page) {
        return memberService.getAllMemberPage(page).stream()
                        .map(MemberDto::from)
                        .collect(Collectors.toList());
    }

}
