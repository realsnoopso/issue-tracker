package com.team6.issue_tracker.global.cloud.dto;

import com.team6.issue_tracker.global.cloud.domain.Result;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MultifileInfo {
    private String originKey;
    private String uploadKey;
    private String path;
    private Result result;

    public static MultifileInfo success(String originKey, String uploadKey, String path) {
        return new MultifileInfo(originKey, uploadKey, path, Result.SUCCESS);
    }

    public static MultifileInfo fail(String originKey) {
        return new MultifileInfo(originKey, null , null, Result.FAIL);
    }
}
