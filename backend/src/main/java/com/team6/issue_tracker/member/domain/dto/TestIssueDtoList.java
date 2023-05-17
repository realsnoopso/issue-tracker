package com.team6.issue_tracker.member.domain.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class TestIssueDtoList {
    private List<TestIssueDto> testIssueDtoList;

    public TestIssueDtoList(List<TestIssueDto> testIssueDtoList) {
        this.testIssueDtoList = testIssueDtoList;
    }
}
