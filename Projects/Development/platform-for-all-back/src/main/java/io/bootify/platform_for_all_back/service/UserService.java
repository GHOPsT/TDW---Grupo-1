package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.User;
import io.bootify.platform_for_all_back.model.UserDTO;
import io.bootify.platform_for_all_back.repos.UserRepository;
import io.bootify.platform_for_all_back.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findAll() {
        final List<User> users = userRepository.findAll(Sort.by("idUser"));
        return users.stream()
                .map(user -> mapToDTO(user, new UserDTO()))
                .toList();
    }

    public UserDTO get(final String idUser) {
        return userRepository.findById(idUser)
                .map(user -> mapToDTO(user, new UserDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public String create(final UserDTO userDTO) {
        final User user = new User();
        mapToEntity(userDTO, user);
        user.setIdUser(userDTO.getIdUser());
        return userRepository.save(user).getIdUser();
    }

    public void update(final String idUser, final UserDTO userDTO) {
        final User user = userRepository.findById(idUser)
                .orElseThrow(NotFoundException::new);
        mapToEntity(userDTO, user);
        userRepository.save(user);
    }

    public void delete(final String idUser) {
        userRepository.deleteById(idUser);
    }

    private UserDTO mapToDTO(final User user, final UserDTO userDTO) {
        userDTO.setIdUser(user.getIdUser());
        userDTO.setPhotoLink(user.getPhotoLink());
        userDTO.setUsername(user.getUsername());
        userDTO.setName(user.getName());
        userDTO.setFamilyName(user.getFamilyName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setRol(user.getRol());
        userDTO.setRegistrationDate(user.getRegistrationDate());
        return userDTO;
    }

    private User mapToEntity(final UserDTO userDTO, final User user) {
        user.setPhotoLink(userDTO.getPhotoLink());
        user.setUsername(userDTO.getUsername());
        user.setName(userDTO.getName());
        user.setFamilyName(userDTO.getFamilyName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setRol(userDTO.getRol());
        user.setRegistrationDate(userDTO.getRegistrationDate());
        return user;
    }

    public boolean idUserExists(final String idUser) {
        return userRepository.existsByIdUserIgnoreCase(idUser);
    }

}
