package com.example.pianocommerce.instrument;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "instruments")
@Entity(name = "instruments")
@Getter // generate all getters on runtime
@NoArgsConstructor // declarate a constructor that generates with no arguments
@AllArgsConstructor // declarate a constructor that generates with arguments
@EqualsAndHashCode(of = "id") // indicate that the id is the unique identifier
public class Instrument {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    private Integer price;

    public Instrument(InstrumentRequestDTO data){
        this.name = data.name();
        this.image = data.image();
        this.price = data.price();
    }
}
