package io.bootify.platform_for_all_back.model;

import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class BookDTO {

    private String idBook;

    @Size(max = 255)
    private String titulo;

    @Size(max = 255)
    private String portada;

    @Size(max = 255)
    private String autor;

    @Size(max = 50)
    private String categoria;

    private String descripcion;

    private LocalDate fechaPublicacion;

    @Size(max = 10)
    private String status;

}
