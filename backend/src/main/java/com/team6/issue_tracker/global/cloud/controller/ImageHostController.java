package com.team6.issue_tracker.global.cloud.controller;

import com.team6.issue_tracker.global.cloud.domain.Directory;
import com.team6.issue_tracker.global.cloud.domain.MultifileInfo;
import com.team6.issue_tracker.global.cloud.service.ImageHostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class ImageHostController {

    private final ImageHostService imageHostService;

    @Autowired
    public ImageHostController(ImageHostService imageHostService) {
        this.imageHostService = imageHostService;
    }

    @PostMapping("/resource")
    public MultifileInfo testUp(MultipartFile file) throws IOException {
        return imageHostService.upload(file, Directory.ISSUE);
    }
}
