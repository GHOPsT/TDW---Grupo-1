import { useEffect, useState } from "react";
import bookData from '../../data/bookData.json';

/**
 * Hook para obtener un libro por su ID.
 * @param {number} id - El ID del libro que se desea buscar.
 * @returns {object|null} - El libro correspondiente al ID o null si no se encuentra.
 */
const useBookById = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = () => {
      const foundBook = bookData.find(book => book.id === parseInt(id, 10));
      if (foundBook) {
        setBook({
          id: foundBook.id,
          title: foundBook.titulo,
          category: foundBook.categoria,
          cover: foundBook.portada,
          description: foundBook.descripcion,
          author: foundBook.author,
          publishedDate: foundBook.fech_publicada
        });
      } else {
        setBook(null);
      }
      setLoading(false);
    };

    fetchBook();
  }, [id]);

  return { book, loading };
};

export default useBookById;
