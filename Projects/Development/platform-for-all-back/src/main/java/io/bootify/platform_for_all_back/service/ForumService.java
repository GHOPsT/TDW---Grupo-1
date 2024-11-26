package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.Forum;
import io.bootify.platform_for_all_back.model.ForumDTO;
import io.bootify.platform_for_all_back.repos.ForumRepository;
import io.bootify.platform_for_all_back.util.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ForumService {

    private final ForumRepository forumRepository;

    public ForumService(final ForumRepository forumRepository) {
        this.forumRepository = forumRepository;
    }

    public List<ForumDTO> findAll() {
        final List<Forum> forums = forumRepository.findAll(Sort.by("idForum"));
        return forums.stream()
                .map(forum -> mapToDTO(forum, new ForumDTO()))
                .toList();
    }

    public ForumDTO get(final Long idForum) {
        return forumRepository.findById(idForum)
                .map(forum -> mapToDTO(forum, new ForumDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public String create(final ForumDTO forumDTO) {
        final Forum forum = new Forum();
        mapToEntity(forumDTO, forum);
        return forumRepository.save(forum).getIdForum();
    }

    public void update(final Long idForum, final ForumDTO forumDTO) {
        final Forum forum = forumRepository.findById(idForum)
                .orElseThrow(NotFoundException::new);
        mapToEntity(forumDTO, forum);
        forumRepository.save(forum);
    }

    public void delete(final Long idForum) {
        forumRepository.deleteById(idForum);
    }

    private ForumDTO mapToDTO(final Forum forum, final ForumDTO forumDTO) {
        forumDTO.setIdForum(forum.getIdForum());
        forumDTO.setTitulo(forum.getTitulo());
        forumDTO.setDetalles(forum.getDetalles());
        forumDTO.setTituloObra(forum.getTituloObra());
        forumDTO.setAuthor(forum.getUsuarioCreadorId());
        forumDTO.setFechaPublicacion(forum.getFechaPublicacion());
        forumDTO.setEstado(forum.getEstado());
        forumDTO.setReporte(forum.getReporte());
        return forumDTO;
    }

    private Forum mapToEntity(final ForumDTO forumDTO, final Forum forum) {
        forum.setTitulo(forumDTO.getTitulo());
        forum.setDetalles(forumDTO.getDetalles());
        forum.setTituloObra(forumDTO.getTituloObra());
        forum.setUsuarioCreadorId(forumDTO.getAuthor());
        forum.setFechaPublicacion(forumDTO.getFechaPublicacion());
        forum.setEstado(forumDTO.getEstado());
        forum.setReporte(forumDTO.getReporte());
        return forum;
    }

}
