package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.User;
import io.bootify.platform_for_all_back.model.UserDTO;
import io.bootify.platform_for_all_back.repos.UserRepository;
import io.bootify.platform_for_all_back.util.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.springframework.data.domain.Sort;


class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User user;
    private UserDTO userDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User();
        user.setIdUser("1");
        user.setUsername("johndoe");
        user.setEmail("johndoe@example.com");

        userDTO = new UserDTO();
        userDTO.setIdUser("1");
        userDTO.setUsername("johndoe");
        userDTO.setEmail("johndoe@example.com");
    }

    @Test
    void testFindAll() {
        when(userRepository.findAll(any(Sort.class))).thenReturn(List.of(user));

        List<UserDTO> users = userService.findAll();

        assertEquals(1, users.size());
        assertEquals("1", users.get(0).getIdUser());
        verify(userRepository, times(1)).findAll(any(Sort.class));
    }

    @Test
    void testGet() {
        when(userRepository.findById("1")).thenReturn(Optional.of(user));

        UserDTO foundUser = userService.get("1");

        assertEquals("1", foundUser.getIdUser());
        assertEquals("johndoe", foundUser.getUsername());
        verify(userRepository, times(1)).findById("1");
    }

    @Test
    void testGetUserNotFound() {
        when(userRepository.findById("2")).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> userService.get("2"));
    }

    @Test
    void testCreate() {
        when(userRepository.save(any(User.class))).thenReturn(user);

        String createdUserId = userService.create(userDTO);

        assertEquals("1", createdUserId);
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testUpdate() {
        when(userRepository.findById("1")).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenReturn(user);

        userService.update("1", userDTO);

        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testUpdateUserNotFound() {
        when(userRepository.findById("2")).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> userService.update("2", userDTO));
    }

    @Test
    void testDelete() {
        doNothing().when(userRepository).deleteById("1");

        userService.delete("1");

        verify(userRepository, times(1)).deleteById("1");
    }

    @Test
    void testIdUserExists() {
        when(userRepository.existsByIdUserIgnoreCase("1")).thenReturn(true);

        boolean exists = userService.idUserExists("1");

        assertTrue(exists);
        verify(userRepository, times(1)).existsByIdUserIgnoreCase("1");
    }

    @Test
    void testIdUserDoesNotExist() {
        when(userRepository.existsByIdUserIgnoreCase("2")).thenReturn(false);

        boolean exists = userService.idUserExists("2");

        assertFalse(exists);
        verify(userRepository, times(1)).existsByIdUserIgnoreCase("2");
    }
}
