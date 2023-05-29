package com.team6.issue_tracker.cloud;

import com.amazonaws.services.s3.AmazonS3;
import com.team6.issue_tracker.cloud.domain.Directory;
import com.team6.issue_tracker.cloud.domain.MultifileInfo;
import com.team6.issue_tracker.cloud.util.MultifileToFileConvertor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class S3ImageHostService implements ImageHostService {

    private final String bucket;
    private final AmazonS3 amazonS3;

    public S3ImageHostService(@Value("${aws.s3.bucket}")String bucket, AmazonS3 amazonS3) {
        this.bucket = bucket;
        this.amazonS3 = amazonS3;
    }

    @Override
    public MultifileInfo upload(MultipartFile file, Directory directory) throws IOException {
        MultifileToFileConvertor.convert(file)
                .orElseThrow(() -> new IllegalArgumentException("File convert Failed."));
        return upload(file, directory);
    }

    @Override
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

    @Override
    public MultifileInfo remove(MultifileInfo info) {
        return null;
    }
}
