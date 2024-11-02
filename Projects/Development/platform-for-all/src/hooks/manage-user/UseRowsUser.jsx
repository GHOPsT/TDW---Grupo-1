import { useMemo } from "react";
import DataUser from '../../data/userData.json';

export default function useRows() {
  // Use los datos directamente desde el JSON
  const rows = useMemo(() => DataUser, []);

  return rows;
}
