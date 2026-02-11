package com.example.pianocommerce.controller;

import com.example.pianocommerce.instrument.Instrument;
import com.example.pianocommerce.instrument.InstrumentRepository;
import com.example.pianocommerce.instrument.InstrumentRequestDTO;
import com.example.pianocommerce.instrument.InstrumentResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return;
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
