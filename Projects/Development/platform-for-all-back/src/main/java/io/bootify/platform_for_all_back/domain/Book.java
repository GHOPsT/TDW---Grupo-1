package io.bootify.platform_for_all_back.domain;

import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "libros")
@Getter
@Setter
public class Book {

    @Id
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

    private String source;

    @CreatedDate
    private OffsetDateTime dateCreated;

    @LastModifiedDate
    private OffsetDateTime lastUpdated;

    @Version
    private Integer version;

}
