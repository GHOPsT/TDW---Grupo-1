import booksData from '../data/bookData.json';

/**
 * Función para obtener un libro por su ID.
 * @param {number} id - El ID del libro que se desea buscar.
 * @returns {object|null} - El libro correspondiente al ID o null si no se encuentra.
 */
export const getBookById = (id) => {
  // Convierte el id a número para la comparación
  const book = booksData.find(book => book.id === parseInt(id, 10));
  return book || null; // Devuelve el libro encontrado o null si no se encuentra
};
