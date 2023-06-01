package com.team6.issue_tracker.domain.member.dto;

import com.team6.issue_tracker.domain.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDetail {
    Long memberIdx;
    String id;
    String name;
    String profileImageUrl;

    public static MemberDetail from(Member member) {
        if (member!=null) {
            return new MemberDetail(member.getMemberIdx(), member.getId(), member.getName(), member.getProfileImageUrl());
        }
        return null;
    }
}