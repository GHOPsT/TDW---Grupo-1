package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.Book;
import io.bootify.platform_for_all_back.model.BookDTO;
import io.bootify.platform_for_all_back.repos.BookRepository;
import io.bootify.platform_for_all_back.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(final BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookDTO> findAll() {
        final List<Book> books = bookRepository.findAll(Sort.by("id"));
        return books.stream()
                .map(book -> mapToDTO(book, new BookDTO()))
                .toList();
    }

    public BookDTO get(final Long idBook) {
        return bookRepository.findById(idBook)
                .map(book -> mapToDTO(book, new BookDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public String create(final BookDTO bookDTO) {
        final Book book = new Book();
        mapToEntity(bookDTO, book);
        return bookRepository.save(book).getIdBook();
    }

    public void update(final Long idBook, final BookDTO bookDTO) {
        final Book book = bookRepository.findById(idBook)
                .orElseThrow(NotFoundException::new);
        mapToEntity(bookDTO, book);
        bookRepository.save(book);
    }

    public void delete(final Long idBook) {
        bookRepository.deleteById(idBook);
    }

    private BookDTO mapToDTO(final Book book, final BookDTO bookDTO) {
        bookDTO.setIdBook(book.getIdBook());
        bookDTO.setTitulo(book.getTitulo());
        bookDTO.setPortada(book.getPortada());
        bookDTO.setAutor(book.getAutor());
        bookDTO.setCategoria(book.getCategoria());
        bookDTO.setDescripcion(book.getDescripcion());
        bookDTO.setFechaPublicacion(book.getFechaPublicacion());
        bookDTO.setStatus(book.getStatus());
        return bookDTO;
    }

    private Book mapToEntity(final BookDTO bookDTO, final Book book) {
        book.setTitulo(bookDTO.getTitulo());
        book.setPortada(bookDTO.getPortada());
        book.setAutor(bookDTO.getAutor());
        book.setCategoria(bookDTO.getCategoria());
        book.setDescripcion(bookDTO.getDescripcion());
        book.setFechaPublicacion(bookDTO.getFechaPublicacion());
        book.setStatus(bookDTO.getStatus());
        return book;
    }

}
