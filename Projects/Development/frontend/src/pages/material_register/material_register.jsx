import React, { useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import './material_register.css';
import { FaUser, FaBook, FaForumbee } from 'react-icons/fa';
import image_button from './images/add_file.png';
import Cookies from 'js-cookie';

const RegistrarMaterial = () => {
  const [nombreLibro, setNombreLibro] = useState('');
  const [autor, setAutor] = useState('');
  const [curso, setCurso] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [materiales, setMateriales] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const materialData = {
      nombreLibro,
      autor,
      curso,
      descripcion,
      archivo: archivo ? archivo.name : null
    };

    Cookies.set('material', JSON.stringify(materialData), { expires: 7 });
    alert('Material subido correctamente');
    setMateriales(prev => [...prev, materialData]);
    resetForm();
  };

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const resetForm = () => {
    setNombreLibro('');
    setAutor('');
    setCurso('');
    setDescripcion('');
    setArchivo(null);
  };

   // Obtener el nombre y correo del usuario desde las cookies
  const nombreUsuario = Cookies.get('nombreUsuario') || 'Usuario';
  const correoUsuario = Cookies.get('correoUsuario') || 'correo@ejemplo.com';


  return (
    <div className="container">
      <Sidebar
        userType="admin"
        profileImg="https://www.example.com/profile-picture.jpg"
        name={nombreUsuario} // Usar el nombre del usuario desde cookies
        email={correoUsuario} // Usar el correo del usuario desde cookies
        links={[
          { icon: <FaUser />, title: 'Gestionar Usuario', path: '/Foro' },
          { icon: <FaForumbee />, title: 'Gestionar Foro', path: '/GestionForo' },
          { icon: <FaBook />, title: 'Gestionar Libros', path: '/material_register' },
        ]}
      />
      <div className="right">
        
        <h1 className='title'>Subir material</h1>
        <p>Los libros son herramientas poderosas para profundizar en los temas de tu interés.</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombreLibro">Nombre del libro:</label>
            <input
              type="text"
              id="nombreLibro"
              value={nombreLibro}
              onChange={(e) => setNombreLibro(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="autor">Autor:</label>
            <input
              type="text"
              id="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="curso">Curso:</label>
            <select
              id="curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              required
            >
              <option value="">Seleccione un curso</option>
              <option value="Historia">Historia</option>
              <option value="Literatura">Literatura</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Matematicas">Matemáticas</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button type="button" className="add-file-button" onClick={() => document.getElementById('archivo').click()}>
              <div className="button-content">
                <img src={image_button} alt="Icono de añadir archivo" className="button-icon" />
                <span>Adjuntar archivo</span>
              </div>
              <input
                type="file"
                id="archivo"
                onChange={handleFileChange}
                style={{ display: 'none' }} // Ocultar el input de archivo
              />
            </button>
          </div>

          <button type="submit">Subir</button>

        </form>

        {/* Tabla de materiales */}
        <div className="materials-table">
          <h2>Materiales Subidos</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Nombre del Libro</th>
                <th>Autor</th>
                <th>Curso</th>
                <th>Descripción</th>
                <th>Archivo</th>
              </tr>
            </thead>
            <tbody>
              {materiales.map((material, index) => (
                <tr key={index}>
                  <td>{material.nombreLibro}</td>
                  <td>{material.autor}</td>
                  <td>{material.curso}</td>
                  <td>{material.descripcion}</td>
                  <td>{material.archivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      
    </div>
  );
};

export default RegistrarMaterial;
