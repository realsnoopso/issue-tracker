package com.team6.issue_tracker.cloud;

import com.team6.issue_tracker.cloud.domain.Directory;
import com.team6.issue_tracker.cloud.domain.MultifileInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class S3ImageHostController {

    private ImageHostService imageHostService;

    @Autowired
    public S3ImageHostController(ImageHostService imageHostService) {
        this.imageHostService = imageHostService;
    }

    @PostMapping("/resource")
    public MultifileInfo testUp(MultipartFile file) throws IOException {
        return imageHostService.upload(file, Directory.ISSUE);
    }
}
