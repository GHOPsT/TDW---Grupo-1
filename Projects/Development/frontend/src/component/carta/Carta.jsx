import React from 'react';
import './Carta.css';

function Carta({ book, show, setShow }) {
  const handleModalOpen = () => {
    setShow(book.id); // Abre el modal del libro actual
  };

  const handleModalClose = () => {
    setShow(null); // Cierra el modal
  };

  const isModalOpen = show === book.id;

  return (
    <div className="carta">
      <div className="carta-imagen-container" onClick={handleModalOpen}>
        <img src={book.portada} alt={book.nombre} className="carta-imagen" />
      </div>
      <div className="carta-contenido">
        <div className="carta-datos">
          <h3 className="carta-titulo">{book.nombre}</h3>
          <p className="carta-categoria">{book.categoria}</p>
        </div>
        <p className="carta-autor">{book.autor}</p>
      </div>

      {/* Modal de información completa */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={handleModalClose}>
              &times;
            </button>
            <h2 className="modal-titulo">{book.nombre}</h2>
            <img src={book.portada} alt={book.nombre} className="modal-imagen" />
            <p className="modal-categoria">Categoría: {book.categoria}</p>
            <p className="modal-autor">Autor: {book.autor}</p>
            <p className="modal-resumen">{book.resumen}</p>
            <p className="modal-fecha">Fecha de publicación: {book.fecha}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carta;
