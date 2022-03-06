package com.webshop.webshop;

public class ExeptionResponse {

    private String message;
    private String statusCode;
    private String details;
    private String reason;

    public String getMessage() {
        return message;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public String getDetails() {
        return details;
    }

    public String getReason() {
        return reason;
    }

    public ExeptionResponse(String message, String statusCode,String reason, String details){
        this.message = message;
        this.statusCode = statusCode;
        this.details = details;
        this.reason = reason;


    }
}
