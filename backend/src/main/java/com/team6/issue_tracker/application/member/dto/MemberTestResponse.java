package com.team6.issue_tracker.application.member.dto;

import com.team6.issue_tracker.application.member.domain.Member;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MemberTestResponse {
    private String name;
    private boolean testBoolean;
    private List<Member> memberList;

    private MemberTestResponse(String name, boolean testBoolean, List<Member> memberList) {
        this.name = name;
        this.testBoolean = testBoolean;
        this.memberList = memberList;
    }

    public static MemberTestResponse fromEntity(String name, boolean testBoolean, List<Member> memberList) {
        return new MemberTestResponse(name, testBoolean, memberList);
    }
}
