package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.Forum;
import io.bootify.platform_for_all_back.model.ForumDTO;
import io.bootify.platform_for_all_back.repos.ForumRepository;
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

class ForumServiceTest {

    @Mock
    private ForumRepository forumRepository;

    @InjectMocks
    private ForumService forumService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        Forum forum = new Forum();
        forum.setIdForum("1"); // Ajustar al tipo correcto si es diferente
        forum.setTitulo("Sample Forum");
        when(forumRepository.findAll(Sort.by("idForum"))).thenReturn(List.of(forum));

        List<ForumDTO> result = forumService.findAll();

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Sample Forum", result.get(0).getTitulo());
        verify(forumRepository, times(1)).findAll(Sort.by("idForum"));
    }

    @Test
    void testGet() {
        Forum forum = new Forum();
        forum.setIdForum("1");
        forum.setTitulo("Sample Forum");
        when(forumRepository.findById(1L)).thenReturn(Optional.of(forum));

        ForumDTO result = forumService.get(1L);

        assertNotNull(result);
        assertEquals("Sample Forum", result.getTitulo());
        verify(forumRepository, times(1)).findById(1L);
    }

    @Test
    void testGet_NotFound() {
        when(forumRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> forumService.get(1L));
        verify(forumRepository, times(1)).findById(1L);
    }

    @Test
    void testCreate() {
        Forum forum = new Forum();
        forum.setIdForum("1");
        when(forumRepository.save(any(Forum.class))).thenReturn(forum);

        ForumDTO forumDTO = new ForumDTO();
        forumDTO.setTitulo("New Forum");
        String result = forumService.create(forumDTO);

        assertNotNull(result);
        assertEquals("1", result);
        verify(forumRepository, times(1)).save(any(Forum.class));
    }

    @Test
    void testUpdate() {
        Forum forum = new Forum();
        when(forumRepository.findById(1L)).thenReturn(Optional.of(forum));
        when(forumRepository.save(any(Forum.class))).thenReturn(forum);

        ForumDTO forumDTO = new ForumDTO();
        forumDTO.setTitulo("Updated Forum");

        assertDoesNotThrow(() -> forumService.update(1L, forumDTO));
        verify(forumRepository, times(1)).findById(1L);
        verify(forumRepository, times(1)).save(any(Forum.class));
    }

    @Test
    void testDelete() {
        doNothing().when(forumRepository).deleteById(1L);

        assertDoesNotThrow(() -> forumService.delete(1L));
        verify(forumRepository, times(1)).deleteById(1L);
    }
}
