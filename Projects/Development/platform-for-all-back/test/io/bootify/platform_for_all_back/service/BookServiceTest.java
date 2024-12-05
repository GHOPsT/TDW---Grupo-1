package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.Book;
import io.bootify.platform_for_all_back.model.BookDTO;
import io.bootify.platform_for_all_back.repos.BookRepository;
import io.bootify.platform_for_all_back.util.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
        import static org.mockito.Mockito.*;

class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        Book book = new Book();
        book.setIdBook("1L");
        book.setTitulo("Sample Book");
        when(bookRepository.findAll(Sort.by("id"))).thenReturn(List.of(book));

        List<BookDTO> result = bookService.findAll();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Sample Book", result.get(0).getTitulo());
        verify(bookRepository, times(1)).findAll(Sort.by("id"));
    }

    @Test
    void testGet() {
        Book book = new Book();
        book.setIdBook("1L");
        book.setTitulo("Sample Book");
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        BookDTO result = bookService.get(1L);

        assertNotNull(result);
        assertEquals("Sample Book", result.getTitulo());
        verify(bookRepository, times(1)).findById(1L);
    }

    @Test
    void testGet_NotFound() {
        when(bookRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> bookService.get(1L));
        verify(bookRepository, times(1)).findById(1L);
    }

    @Test
    void testCreate() {
        Book book = new Book();
        book.setIdBook("1L");
        when(bookRepository.save(any(Book.class))).thenReturn(book);

        BookDTO bookDTO = new BookDTO();
        bookDTO.setTitulo("New Book");
        String result = bookService.create(bookDTO);

        assertNotNull(result);
        verify(bookRepository, times(1)).save(any(Book.class));
    }

    @Test
    void testUpdate() {
        Book book = new Book();
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        when(bookRepository.save(any(Book.class))).thenReturn(book);

        BookDTO bookDTO = new BookDTO();
        bookDTO.setTitulo("Updated Book");

        assertDoesNotThrow(() -> bookService.update(1L, bookDTO));
        verify(bookRepository, times(1)).findById(1L);
        verify(bookRepository, times(1)).save(any(Book.class));
    }

    @Test
    void testDelete() {
        doNothing().when(bookRepository).deleteById(1L);

        assertDoesNotThrow(() -> bookService.delete(1L));
        verify(bookRepository, times(1)).deleteById(1L);
    }
}
