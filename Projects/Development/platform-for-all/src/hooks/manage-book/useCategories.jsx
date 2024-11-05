import { useMemo } from 'react';
import booksData from '../../data/bookData.json';

export default function useCategories() {
  const categories = useMemo(() => {
    const uniqueCategories = new Set(booksData.map(book => book.categoria));
    return Array.from(uniqueCategories);
  }, []);
  
  return categories;
}
