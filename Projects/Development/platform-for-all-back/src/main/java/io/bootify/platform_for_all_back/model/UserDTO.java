package io.bootify.platform_for_all_back.model;

import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserDTO {

    @Size(max = 255)
    @UserIdUserValid
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

}
