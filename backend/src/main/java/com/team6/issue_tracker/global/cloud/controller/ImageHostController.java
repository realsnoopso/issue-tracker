package com.team6.issue_tracker.global.cloud.controller;

import com.team6.issue_tracker.global.cloud.domain.Directory;
import com.team6.issue_tracker.global.cloud.dto.FileUploadResult;
import com.team6.issue_tracker.global.cloud.service.ImageHostService;
import com.team6.issue_tracker.global.util.ResponseMessage;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ImageHostController {

    private final ImageHostService imageHostService;

    @Operation(
            summary = "이미지 업로드",
            tags = "image",
            description = "사용자는 이미지를 업로드할 수 있다."
    )
    @PostMapping(value = "/resource", consumes = "multipart/form-data")
    public ResponseEntity<ResponseMessage<FileUploadResult>> testUp(@RequestParam MultipartFile files) {
        FileUploadResult fileUploadResult = imageHostService.upload(files, Directory.ISSUE);
        return ResponseMessage.of(HttpStatus.OK, "Image uploaded successfully", fileUploadResult);
    }
}
