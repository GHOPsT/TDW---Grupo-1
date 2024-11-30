package io.bootify.platform_for_all_back.service;

import io.bootify.platform_for_all_back.domain.PrimarySequence;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PrimarySequenceServiceTest {

    @Mock
    private MongoOperations mongoOperations;

    @InjectMocks
    private PrimarySequenceService primarySequenceService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetNextValue_ExistingSequence() {
        // Simula un PrimarySequence existente en la base de datos
        PrimarySequence existingSequence = new PrimarySequence();
        existingSequence.setId("primarySequence");
        existingSequence.setSeq(10001);

        when(mongoOperations.findAndModify(
                any(),
                any(Update.class),
                any(),
                eq(PrimarySequence.class)))
                .thenReturn(existingSequence);

        long result = primarySequenceService.getNextValue();

        assertEquals(10001, result);
        verify(mongoOperations, times(1)).findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class));
    }

    @Test
    void testGetNextValue_NewSequence() {
        // Simula que no se encuentra un PrimarySequence y se debe crear uno nuevo
        when(mongoOperations.findAndModify(
                any(),
                any(Update.class),
                any(),
                eq(PrimarySequence.class)))
                .thenReturn(null);

        doNothing().when(mongoOperations).insert(any(PrimarySequence.class));

        long result = primarySequenceService.getNextValue();

        assertEquals(10000, result);
        verify(mongoOperations, times(1)).findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class));
        verify(mongoOperations, times(1)).insert(any(PrimarySequence.class));
    }
}
