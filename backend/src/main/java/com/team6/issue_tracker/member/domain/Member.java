package com.team6.issue_tracker.member.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Getter
@Builder
@AllArgsConstructor
@Table("member")
public class Member {

    @Id
    private Long memberIdx;
    private String id;
    private String password;
    private String profileImageUrl;
    @Column("github_join")
    private boolean gitSync;

    @PersistenceCreator
    private Member(String id, String password, String profileImageUrl, boolean gitSync) {
        this.id = id;
        this.password = password;
        this.profileImageUrl = profileImageUrl;
        this.gitSync = gitSync;
    }

    public static Member newMember(String id, String password, String profileImageUrl) {
        return new Member(id, password, profileImageUrl, false);
    }
}
