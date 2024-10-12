import React from 'react';
import './Pagination.css';

function Pagination({ booksPerPage, totalBooks, paginate, currentPage }) {
  const pageNumbers = [];

  // Calcula el número de páginas
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {/* Botón "Anterior" */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="pagination-button"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#171; Anterior
          </button>
        </li>
        {/* Números de página */}
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        {/* Botón "Siguiente" */}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button
            className="pagination-button"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Siguiente &#187;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
