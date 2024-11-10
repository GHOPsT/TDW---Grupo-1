package io.bootify.platform_for_all_back.repos;

import io.bootify.platform_for_all_back.domain.Book;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BookRepository extends MongoRepository<Book, Long> {
}
