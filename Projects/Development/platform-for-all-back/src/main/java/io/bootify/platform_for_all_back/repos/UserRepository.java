package io.bootify.platform_for_all_back.repos;

import io.bootify.platform_for_all_back.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {

    boolean existsByIdUserIgnoreCase(String idUser);

}
