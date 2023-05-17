package com.team6.issue_tracker.member;

import com.team6.issue_tracker.member.domain.dto.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class TestController {
    @GetMapping("/testApi")
    public List<TestIssueDto> testApi() {
            List<TestIssueDto> testIssueDtoList = new ArrayList<>();
//            List<TestMemberDto> testMemberDtoList = new ArrayList<>();
//            List<TestCommentDto> testCommentDtoList = new ArrayList<>();
//            List<TestLabelDto> testLabelDtoList = new ArrayList<>();
//            List<TestMilestoneDto> testMilestoneDtoList = new ArrayList<>();
            testIssueDtoList.add(new TestIssueDto(1, "새 기능 추가",
                    List.of(new TestCommentDto(new TestMemberDto("스눕소", "https://ca.slack-edge.com/T74H5245A-U04FHDY4DFV-1a828514d33d-512"), "새 기능 추가에 대한 의견입니다.")),
                    new TestMemberDto("스눕소", "https://ca.slack-edge.com/T74H5245A-U04FHDY4DFV-1a828514d33d-512"),
                    List.of(new TestLabelDto("UI", "이것은 UI 레이블입니다.", "outline")),
                    new TestMilestoneDto(1, "사랑이는 귀엽다.", new Date(), "이것은 마일스톤 1의 내용입니다.", 10, 5, false),
                    "open",
                    new Date()));
        return testIssueDtoList;
    }
}
