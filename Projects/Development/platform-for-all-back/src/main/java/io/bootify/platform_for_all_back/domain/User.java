package io.bootify.platform_for_all_back.domain;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "usuarios")
@Getter
@Setter
public class User {

    @NotNull
    @Id
    private String idUser;

    @Size(max = 255)
    private String photoLink;

    @Size(max = 255)
    private String username;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String familyName;

    @Size(max = 255)
    private String email;

    @Size(max = 255)
    private String password;

    @Size(max = 255)
    private String rol;

    private LocalDateTime registrationDate;

    @CreatedDate
    private OffsetDateTime dateCreated;

    @LastModifiedDate
    private OffsetDateTime lastUpdated;

    @Version
    private Integer version;

}
