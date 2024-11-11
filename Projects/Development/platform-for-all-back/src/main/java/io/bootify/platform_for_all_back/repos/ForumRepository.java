package io.bootify.platform_for_all_back.repos;

import io.bootify.platform_for_all_back.domain.Forum;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ForumRepository extends MongoRepository<Forum, Long> {
}
