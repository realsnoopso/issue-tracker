package com.team6.issue_tracker.domain.issue.domain;

import com.team6.issue_tracker.domain.label.Label;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import javax.validation.constraints.NotNull;

public class Labeling {
    AggregateReference<Label, @NotNull Long> labelIdx;

    public Long getLabelIdx() {
        return labelIdx.getId();
    }
}
