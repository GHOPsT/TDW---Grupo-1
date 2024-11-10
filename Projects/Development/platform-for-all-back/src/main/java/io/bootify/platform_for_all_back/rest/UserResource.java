package io.bootify.platform_for_all_back.rest;

import io.bootify.platform_for_all_back.model.UserDTO;
import io.bootify.platform_for_all_back.service.UserService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserResource {

    private final UserService userService;

    public UserResource(final UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<UserDTO> getUser(@PathVariable(name = "idUser") final String idUser) {
        return ResponseEntity.ok(userService.get(idUser));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<String> createUser(@RequestBody @Valid final UserDTO userDTO) {
        final String createdIdUser = userService.create(userDTO);
        return new ResponseEntity<>('"' + createdIdUser + '"', HttpStatus.CREATED);
    }

    @PutMapping("/{idUser}")
    public ResponseEntity<String> updateUser(@PathVariable(name = "idUser") final String idUser,
            @RequestBody @Valid final UserDTO userDTO) {
        userService.update(idUser, userDTO);
        return ResponseEntity.ok('"' + idUser + '"');
    }

    @DeleteMapping("/{idUser}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteUser(@PathVariable(name = "idUser") final String idUser) {
        userService.delete(idUser);
        return ResponseEntity.noContent().build();
    }

}
