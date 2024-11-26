package io.bootify.platform_for_all_back.domain;

import jakarta.validation.constraints.Size;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "foros")
@Getter
@Setter
public class Forum {

    @Id
    private String idForum;

    @Size(max = 255)
    private String titulo;

    private String detalles;

    @Size(max = 255)
    private String tituloObra;

    @Size(max = 255)
    private String usuarioCreadorId;

    private LocalTime fechaPublicacion;

    @Size(max = 50)
    private String estado;

    private String reporte;

    @CreatedDate
    private OffsetDateTime dateCreated;

    @LastModifiedDate
    private OffsetDateTime lastUpdated;

    @Version
    private Integer version;

}
