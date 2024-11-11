package io.bootify.platform_for_all_back.util;

import java.time.OffsetDateTime;
import java.util.Date;
import org.bson.Document;
import org.springframework.core.convert.converter.Converter;


public class MongoOffsetDateTimeWriter implements Converter<OffsetDateTime, Document> {

    public static final String DATE_FIELD = "dateTime";
    public static final String OFFSET_FIELD = "offset";

    @Override
    public Document convert(final OffsetDateTime offsetDateTime) {
        final Document document = new Document();
        document.put(DATE_FIELD, Date.from(offsetDateTime.toInstant()));
        document.put(OFFSET_FIELD, offsetDateTime.getOffset().toString());
        return document;
    }

}
