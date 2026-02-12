package com.example.pianocommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pianocommerce.instrument.Instrument;
import com.example.pianocommerce.instrument.InstrumentRepository;
import com.example.pianocommerce.instrument.InstrumentRequestDTO;
import com.example.pianocommerce.instrument.InstrumentResponseDTO;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("instrument")
public class InstrumentController {

    @Autowired
    private InstrumentRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*") //connect with frontend. for production, add a port to make it secure
    @PostMapping
    public void saveInstrument(@RequestBody InstrumentRequestDTO data){ //take the body from the https requisition. for this injection, we use RequestBody
        Instrument instrumentData = new Instrument(data);
        repository.save(instrumentData); // this command waits an entity, so we have to turn the DTO into a entity.
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<InstrumentResponseDTO> getAll(){
        List<InstrumentResponseDTO> instrumentList = repository
                .findAll()
                .stream()
                .map(InstrumentResponseDTO::new)
                .toList();

        return instrumentList;
    }
}
