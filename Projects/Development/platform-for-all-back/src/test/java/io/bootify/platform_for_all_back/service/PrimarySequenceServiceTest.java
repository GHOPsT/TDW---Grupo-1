package io.bootify.platform_for_all_back.service;

import org.mockito.ArgumentCaptor;
import io.bootify.platform_for_all_back.domain.PrimarySequence;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PrimarySequenceServiceTest {

    @Mock
    private MongoOperations mongoOperations;

    @InjectMocks
    private PrimarySequenceService primarySequenceService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this); // Considera remover esto si usas Mockito 4+
    }

    @Test
    void testGetNextValue_ExistingSequence() {
        PrimarySequence existingSequence = new PrimarySequence();
        existingSequence.setId("primarySequence");
        existingSequence.setSeq(10001L); // Asegúrate que seq es Long

        when(mongoOperations.findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class)))
                .thenReturn(existingSequence);

        long result = primarySequenceService.getNextValue();

        assertEquals(10001L, result);
        verify(mongoOperations, times(1)).findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class));
    }

    @Test
    void testGetNextValue_NewSequence() {
        when(mongoOperations.findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class)))
                .thenReturn(null);

        PrimarySequence newSequence = new PrimarySequence();
        newSequence.setId("primarySequence");
        newSequence.setSeq(10000L); // Asegúrate que seq es Long

        when(mongoOperations.insert(any(PrimarySequence.class))).thenReturn(newSequence); // Simula el insert

        long result = primarySequenceService.getNextValue();

        assertEquals(10000L, result);
        verify(mongoOperations, times(1)).findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class));
        verify(mongoOperations, times(1)).insert(any(PrimarySequence.class));
    }

    @Test
    void testGetNextValue_InsertCalledWithCorrectObject_UsingArgumentCaptor() {
        when(mongoOperations.findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class)))
                .thenReturn(null);

        PrimarySequence newSequence = new PrimarySequence();
        newSequence.setId("primarySequence");
        newSequence.setSeq(10000L);

        when(mongoOperations.insert(any(PrimarySequence.class))).thenReturn(newSequence);

        primarySequenceService.getNextValue();

        ArgumentCaptor<PrimarySequence> captor = ArgumentCaptor.forClass(PrimarySequence.class);
        verify(mongoOperations, times(1)).insert(captor.capture());

        PrimarySequence capturedSequence = captor.getValue();
        assertEquals("primarySequence", capturedSequence.getId());
        assertEquals(10000L, capturedSequence.getSeq());
    }

    @Test
    void testGetNextValue_ExceptionHandling() {
        when(mongoOperations.findAndModify(any(), any(Update.class), any(), eq(PrimarySequence.class)))
                .thenThrow(new RuntimeException("Database error"));

        assertThrows(RuntimeException.class, () -> primarySequenceService.getNextValue());
    }
}