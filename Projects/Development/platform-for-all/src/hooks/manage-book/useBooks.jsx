import { useState, useEffect } from "react";
import bookData from '../../data/bookData.json';

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Cargar solo los campos necesarios
    const filteredBooks = bookData.map(book => ({
      id: book.id,
      title: book.titulo,
      category: book.categoria,
      cover: book.portada
    }));
    setBooks(filteredBooks);
  }, []);

  return books;
};

export default useBooks;
