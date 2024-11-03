package com.example.backend.controllers;

import com.example.backend.models.Foro;
import com.example.backend.services.ForoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foros")
public class ForoController {
    @Autowired
    private ForoService foroService;

    @PostMapping
    public Foro crearForo(@RequestBody Foro foro){
        return foroService.crearForo(foro);
    }

    @GetMapping
    public List<Foro> obtenerForos(){
        return foroService.obtenerForos();
    }

    @GetMapping("/{id}")
    public Foro obtenerForoPorId(@PathVariable String id){
        return foroService.obtenerForoPorId(id);
    }

    @DeleteMapping("/{id}")
    public void eliminarForo(@PathVariable String id){
        foroService.eliminarForo(id);
    }

}
