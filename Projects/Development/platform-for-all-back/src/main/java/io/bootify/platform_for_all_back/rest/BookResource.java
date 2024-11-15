package io.bootify.platform_for_all_back.rest;

import io.bootify.platform_for_all_back.model.BookDTO;
import io.bootify.platform_for_all_back.service.BookService;
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
@RequestMapping(value = "/api/books", produces = MediaType.APPLICATION_JSON_VALUE)
public class BookResource {

    private final BookService bookService;

    public BookResource(final BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<BookDTO>> getAllBooks() {
        return ResponseEntity.ok(bookService.findAll());
    }

    @GetMapping("/{idBook}")
    public ResponseEntity<BookDTO> getBook(@PathVariable(name = "id") final Long idBook) {
        return ResponseEntity.ok(bookService.get(idBook));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<String> createBook(@RequestBody @Valid final BookDTO bookDTO) {
        final String createdIdBook = bookService.create(bookDTO);
        return new ResponseEntity<>(createdIdBook, HttpStatus.CREATED);
    }

    @PutMapping("/{idBook}")
    public ResponseEntity<Long> updateBook(@PathVariable(name = "id") final Long idBook,
            @RequestBody @Valid final BookDTO bookDTO) {
        bookService.update(idBook, bookDTO);
        return ResponseEntity.ok(idBook);
    }

    @DeleteMapping("/{idBook}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteBook(@PathVariable(name = "id") final Long idBook) {
        bookService.delete(idBook);
        return ResponseEntity.noContent().build();
    }

}
