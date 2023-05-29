package com.team6.issue_tracker.global.cloud.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;

public class MultifileToFileConvertor {

    public static Optional<File> convert(MultipartFile multipartFile) throws IOException {
        File file = new File("src/main/resources/store/" + multipartFile.getOriginalFilename());

        if (file.createNewFile()) {
            try (FileOutputStream fileOutputStream = new FileOutputStream(file)) {
                fileOutputStream.write(multipartFile.getBytes());
            }
            return Optional.of(file);
        }
        return Optional.empty();
    }
}
