import React, {useState} from 'react';
import Sidebar from '../../component/sidebar/Sidebar'; // Asegúrate de que la ruta sea correcta
import './material_register.css'; // Opcional para estilos adicionales
import image from './images/image_materialregister.png';
import image_button from './images/add_file.png';

const RegistrarMaterial = () => {
  // Estado para manejar los datos del formulario
  const [nombreLibro, setNombreLibro] = useState('');
  const [autor, setAutor] = useState('');
  const [curso, setCurso] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);

  // Función para manejar el guardado en el almacenamiento local
  const handleSubmit = (e) => {
    e.preventDefault();

  const materialData = {
    nombreLibro,
    autor,
    curso,
    descripcion,
    archivo: archivo ? archivo.name : null // Guarda solo el nombre del archivo
  };

  // Guarda los datos en el almacenamiento local
  localStorage.setItem('material', JSON.stringify(materialData));
  alert('Material subido correctamente');
  };

  // Función para manejar la carga del archivo
  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="right">
        <h1 className='tittle'>Subir material</h1>
        <p>Los libros son herramientas poderosas para profundizar en los temas de tu interés.</p>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombreLibro">Nombre del libro:</label>
            <input
              type="text"
              id="nombreLibro"
              value={nombreLibro}
              onChange={(e) => setNombreLibro(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="autor">Autor:</label>
            <input
              type="text"
              id="autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />
          </div>

          <div>
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

          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="button" className="add-file-button" onClick={() => document.getElementById('archivo').click()}>
              <div className="button-content">
                <img src={image_button} alt="Icono de añadir archivo" className="button-icon" />
                <span style={{color:'black'}}>Adjuntar archivo</span>
              </div>
              <input
                type="file"
                id="archivo"
                onChange={handleFileChange}
                style={{ display: 'none' }} // Ocultar el input de archivo
              />
            </button>
          </div>

          <button type="submit" src={image_button}>Subir</button>
        </form>
      </div>
      <div className="left">
        <img src={image} alt="Imagen de referencia" />
      </div>
      </div>
  );
};

export default RegistrarMaterial;
