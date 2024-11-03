package com.example.backend;

import  com.example.backend.models.Foro;
import com.example.backend.services.ForoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private ForoService foroService;

	public static void main(String[] args){
		SpringApplication.run(BackendApplication.class, args);
	}
	// Pruebas para la conexión con la base de datos
	@Override
	public void run(String... args){
		probarForoService();
	}

	private void probarForoService(){
		Foro nuevoForo = new Foro();
		nuevoForo.setTitulo("Primer Foro de Prueba 2");
		nuevoForo.setDescripcion("Descripción de prueba del foro2" );
		nuevoForo.setFechaCreacion(LocalDateTime.now());
		nuevoForo.setUsuarioCreadorId("672023e46c27acf2498b23fc");

		Foro foroGuardado = foroService.crearForo(nuevoForo);
		System.out.println("Foro guardado: "+ foroGuardado);

		System.out.println("Lista de Foros");
		foroService.obtenerForos().forEach(System.out::println);

		Foro foroObtenido = foroService.obtenerForoPorId(foroGuardado.getId());
		System.out.println("Foro obtenido por ID: "+ foroObtenido);

		//foroService.eliminarForo(foroGuardado.getId());
		//System.out.println("Foro Eliminado Correctamente");
	}
}
