package com.webshop.webshop;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InputInvalidException extends RuntimeException {

    public InputInvalidException(String exception) {
        super(exception);
    }


}
