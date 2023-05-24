package com.team6.issue_tracker.issue.domain;

import com.team6.issue_tracker.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Getter @Builder
@AllArgsConstructor
@Table("issue")
public class Issue {
    @Id
    private Long issueIdx;

    @NotNull
    private String title;

    private String contents;

    private boolean status;

    private Writer writer;

    private Assignee assignee;


    @Valid
    @MappedCollection(idColumn = "ISSUE_ID", keyColumn = "labeling_idx")
    @Builder.Default
    private Map<Long, LabelOnIssue> labelsOnIssue = new HashMap<>();

    private Instant createdAt;

    private Instant editedAt;


}
