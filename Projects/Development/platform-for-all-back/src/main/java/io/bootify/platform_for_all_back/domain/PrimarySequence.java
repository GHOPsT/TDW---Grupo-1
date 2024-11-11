package io.bootify.platform_for_all_back.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@Getter
@Setter
public class PrimarySequence {

    @Id
    private String id;

    private long seq;

}
