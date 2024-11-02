import { useMemo } from "react";
import DataBook from '../../data/bookData.json';

export default function useRows() {
  // Use los datos directamente desde el JSON
  const rows = useMemo(() => DataBook, []);

  return rows;
}
