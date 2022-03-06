package com.webshop.webshop;

public class Response {

    private long id;
    private String statusCode;
    private String message;

    public Response(long id, String statusCode, String message) {

        this.id = id;
        this.statusCode = statusCode;
        this.message = message;
    }

    public Response(String statusCode, String message) {

        this(0, statusCode, message);

    }

    public long getId() {
        return id;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    }
