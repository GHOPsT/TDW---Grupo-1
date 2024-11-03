package com.example.backend.services;

import com.example.backend.models.Foro;
import com.example.backend.repositories.ForoRepository;
import  org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForoService {
    @Autowired
    private ForoRepository foroRepository;

    public Foro crearForo(Foro foro){
        return foroRepository.save(foro);
    }

    public List<Foro> obtenerForos(){
        return foroRepository.findAll();
    }

    public Foro obtenerForoPorId(String id){
        return foroRepository.findById(id).orElse(null);
    }

    public void eliminarForo(String id){
        foroRepository.deleteById(id);
    }

}
