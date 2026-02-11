package com.example.pianocommerce.instrument;

public record InstrumentResponseDTO(Long id, String name, String image, Integer price) {
    public InstrumentResponseDTO(Instrument instrument){
        this(instrument.getId(), instrument.getName(), instrument.getImage(), instrument.getPrice());
    }
}
