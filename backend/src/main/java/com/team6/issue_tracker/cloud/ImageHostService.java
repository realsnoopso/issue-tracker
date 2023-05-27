package com.team6.issue_tracker.cloud;

import com.team6.issue_tracker.cloud.domain.Directory;
import com.team6.issue_tracker.cloud.domain.MultifileInfo;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public interface ImageHostService {
    MultifileInfo upload(MultipartFile file, Directory directory) throws IOException;
    MultifileInfo upload(File file, Directory directory);
    MultifileInfo remove(MultifileInfo info);
}
