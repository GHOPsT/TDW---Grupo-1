package com.example.backend.repositories;

import com.example.backend.models.Foro;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ForoRepository extends MongoRepository<Foro, String>{
    List<Foro> findByUsuarioCreadorId(String usuarioCreadorId);
}
