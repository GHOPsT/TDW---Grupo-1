import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Título",
        accessor: "titulo"
      },
      {
        Header: "Autor",
        accessor: "autor"
      },
      {
        Header: "Categoría",
        accessor: "categoria"
      },
      {
        Header: "Fecha de Publicación",
        accessor: "fech_publicada"
      },
      {
        Header: "Estado",
        accessor: "estado"
      }
    ],
    []
  );

  return columns;
}
