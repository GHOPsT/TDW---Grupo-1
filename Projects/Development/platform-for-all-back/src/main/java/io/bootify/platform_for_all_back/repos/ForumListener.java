package io.bootify.platform_for_all_back.repos;

import io.bootify.platform_for_all_back.domain.Forum;
import io.bootify.platform_for_all_back.service.PrimarySequenceService;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;


@Component
public class ForumListener extends AbstractMongoEventListener<Forum> {
    
    private final PrimarySequenceService primarySequenceService;

    public ForumListener(final PrimarySequenceService primarySequenceService) {
        this.primarySequenceService = primarySequenceService;
    }

    @Override
    public void onBeforeConvert(final BeforeConvertEvent<Forum> event) {
        if (event.getSource().getIdForum() == null) {
            event.getSource().setIdForum(String.valueOf(primarySequenceService.getNextValue()));
        }
    }

}
