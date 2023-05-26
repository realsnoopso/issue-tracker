package com.team6.issue_tracker.application.member.dto;

import com.team6.issue_tracker.application.member.domain.Member;
import lombok.Data;

@Data
public class MemberDto {
    Long memberId;
    String name;
    String profileImageUrl;

    public MemberDto(Long memberId, String name, String profileImageUrl) {
        this.memberId = memberId;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
    }

    public static MemberDto from(Member member) {
        return new MemberDto(member.getMemberIdx(), member.getId(), member.getProfileImageUrl());
    }
}