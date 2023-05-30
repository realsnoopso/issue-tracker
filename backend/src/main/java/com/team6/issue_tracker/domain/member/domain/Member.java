package com.team6.issue_tracker.domain.member.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import java.time.Instant;

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
    private String name;
    private String profileImageUrl;
    private String accessToken;
    @NotNull
    @CreatedDate
    @PastOrPresent
    private Instant createdAt;


}
