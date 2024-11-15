package io.bootify.platform_for_all_back.rest;

import io.bootify.platform_for_all_back.model.ForumDTO;
import io.bootify.platform_for_all_back.service.ForumService;
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
@RequestMapping(value = "/api/forums", produces = MediaType.APPLICATION_JSON_VALUE)
public class ForumResource {

    private final ForumService forumService;

    public ForumResource(final ForumService forumService) {
        this.forumService = forumService;
    }

    @GetMapping
    public ResponseEntity<List<ForumDTO>> getAllForums() {
        return ResponseEntity.ok(forumService.findAll());
    }

    @GetMapping("/{idForum}")
    public ResponseEntity<ForumDTO> getForum(@PathVariable(name = "idForum") final Long idForum) {
        return ResponseEntity.ok(forumService.get(idForum));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<String> createForum(@RequestBody @Valid final ForumDTO forumDTO) {
        final String createdIdForum = forumService.create(forumDTO);
        return new ResponseEntity<>(createdIdForum, HttpStatus.CREATED);
    }

    @PutMapping("/{idForum}")
    public ResponseEntity<Long> updateForum(@PathVariable(name = "idForum") final Long idForum,
            @RequestBody @Valid final ForumDTO forumDTO) {
        forumService.update(idForum, forumDTO);
        return ResponseEntity.ok(idForum);
    }

    @DeleteMapping("/{idForum}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteForum(@PathVariable(name = "idForum") final Long idForum) {
        forumService.delete(idForum);
        return ResponseEntity.noContent().build();
    }

}
