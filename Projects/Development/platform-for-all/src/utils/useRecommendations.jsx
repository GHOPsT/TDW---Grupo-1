import { useState, useEffect } from 'react';
import booksData from '../data/bookData.json'; // Asegúrate de que la ruta sea correcta


const useRecommendations = (currentCategory, currentId) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (!currentCategory) return; // No hacer nada si no hay categoría actual

        const filteredBooks = booksData.filter(
            (book) => book.categoria === currentCategory && book.id !== currentId
        );
        const limitedBooks = filteredBooks.slice(0, 4); // Limitar a 4 libros
        setRecommendations(limitedBooks);
    }, [currentCategory, currentId]);

    return recommendations;
};

export default useRecommendations;