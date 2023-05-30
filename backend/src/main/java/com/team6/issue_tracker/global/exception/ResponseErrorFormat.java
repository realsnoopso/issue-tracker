package com.team6.issue_tracker.global.exception.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ResponseFormat {
    private String error;
    private String message;

    private ResponseFormat(Exception error, String message) {
        this.error = error.toString();
        this.message = message;
    }

    public static ResponseFormat of(Exception error, String message) {
       return new ResponseFormat(error, message);
   }
}
