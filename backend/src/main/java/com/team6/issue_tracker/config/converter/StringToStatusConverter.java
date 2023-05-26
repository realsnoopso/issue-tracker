package com.team6.issue_tracker.config.converter;

import com.team6.issue_tracker.application.issue.dto.Status;
import org.springframework.core.convert.converter.Converter;

public class StringToStatusConverter implements Converter<String, Status> {

    @Override
    public Status convert(String source) {
        return Status.valueOf(source.toUpperCase());
    }

}
