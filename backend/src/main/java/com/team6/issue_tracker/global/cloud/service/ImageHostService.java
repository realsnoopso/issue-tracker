package com.team6.issue_tracker.global.cloud.service;

import com.amazonaws.services.s3.AmazonS3;
import com.team6.issue_tracker.global.cloud.domain.Directory;
import com.team6.issue_tracker.global.cloud.domain.MultifileInfo;
import com.team6.issue_tracker.global.cloud.util.MultifileToFileConvertor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class ImageHostService {

    private final String bucket;
    private final AmazonS3 amazonS3;

    public ImageHostService(@Value("${aws.s3.bucket}")String bucket, AmazonS3 amazonS3) {
        this.bucket = bucket;
        this.amazonS3 = amazonS3;
    }

    public MultifileInfo upload(MultipartFile file, Directory directory) throws IOException {
        MultifileToFileConvertor.convert(file)
                .orElseThrow(() -> new IllegalArgumentException("File convert Failed."));
        return upload(file, directory);
    }

    public MultifileInfo upload(File file, Directory directory) {
        String key = generateFileName(file, directory.getPrefix());
        putObjectToS3(file, key);
        file.delete();

        return MultifileInfo.builder()
                .key(key)
                .path(putObjectToS3(file, key))
                .build();
    }

    private String putObjectToS3(File file, String fileName) {
        amazonS3.putObject(bucket, fileName, file);
        return amazonS3.getUrl(bucket, fileName).toString();
    }

    private String generateFileName(File file, String prefix) {
        return String.format("%s%s%s", prefix, UUID.randomUUID(), file.getName());
    }

    public MultifileInfo remove(MultifileInfo info) {
        return null;
    }
}
