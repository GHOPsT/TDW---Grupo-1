package io.bootify.platform_for_all_back.repos;

import io.bootify.platform_for_all_back.domain.Book;
import io.bootify.platform_for_all_back.service.PrimarySequenceService;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class BookListener extends AbstractMongoEventListener<Book> {

    private final PrimarySequenceService primarySequenceService;

    public BookListener(final PrimarySequenceService primarySequenceService) {
        this.primarySequenceService = primarySequenceService;
    }

    @Override
    public void onBeforeConvert(final BeforeConvertEvent<Book> event) {
        if (event.getSource().getIdBook() == null) {
            event.getSource().setIdBook(String.valueOf(primarySequenceService.getNextValue()));
        }
    }

}
