package com.team6.issue_tracker.global.cloud.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MultifileInfo {
    private String key;
    private String path;
    private Result result;
}
