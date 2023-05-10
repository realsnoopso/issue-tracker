package com.team6.issue_tracker.member.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Member {
    private Long idx;
    private String memberId;
    private boolean gitSync;

    public Member(Long idx, String memberId, boolean gitSync) {
        this.idx = idx;
        this.memberId = memberId;
        this.gitSync = gitSync;
    }
}
