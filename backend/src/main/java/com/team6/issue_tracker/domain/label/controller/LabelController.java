package com.team6.issue_tracker.domain.label.controller;

import com.team6.issue_tracker.domain.label.dto.LabelDetail;
import com.team6.issue_tracker.domain.label.service.LabelService;
import com.team6.issue_tracker.global.util.ResponseMessage;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class LabelController {

    private final LabelService labelService;

    @Operation(
            summary = "라벨 목록 조회",
            tags = "label",
            description = "사용자는 레이블 목록을 볼 수 있다."
    )
    @GetMapping("/label")
    public ResponseEntity<ResponseMessage<List<LabelDetail>>> readLabelList() {
        List<LabelDetail> labelDetailList = labelService.getAllLabelDetails();
        return ResponseMessage.of(HttpStatus.OK, "Label details retrieved successfully", labelDetailList);
    }
}
