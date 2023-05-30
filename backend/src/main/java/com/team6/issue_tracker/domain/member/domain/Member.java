package com.team6.issue_tracker.domain.member.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@AllArgsConstructor
@Table("member")
public class Member {

    @Id
    private Long memberIdx;

    @NotNull
    private String id;

    @NotNull
    private String password;

    private String profileImageUrl;

    @Column("github_join")
    private Boolean githubState;

    @PersistenceCreator
    private Member(String id, String password, String profileImageUrl, Boolean githubState) {
        this.id = id;
        this.password = password;
        this.profileImageUrl = profileImageUrl;
        this.githubState = githubState;
    }

    public static Member newMember(String id, String password, String profileImageUrl) {
        return new Member(id, password, profileImageUrl, false);
    }
}
