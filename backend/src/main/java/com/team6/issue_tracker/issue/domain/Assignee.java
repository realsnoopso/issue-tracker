package com.team6.issue_tracker.issue.domain;

import com.team6.issue_tracker.member.domain.Member;
import lombok.Builder;
import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Value
@Builder
public class Assignee {
    AggregateReference<Member, @NotNull UUID> assignee;

    @Id
    Long id;
    String name;
    String profileImageUrl;
}
