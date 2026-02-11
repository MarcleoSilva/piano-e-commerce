package com.example.pianocommerce.instrument;

public record InstrumentRequestDTO(String name, String image, Integer price) { // no id because the user does not generate ID, but the backend
}
