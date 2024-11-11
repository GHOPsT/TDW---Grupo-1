import { useMemo } from "react";
import PropTypes from "prop-types"; 

export default function useUserColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Foto",
        accessor: "photo",
        Cell: ({ value }) => (
          <img src={value} alt="Profile" style={{ width: "30px", borderRadius: "50%" }} />
        )
      },
      {
        Header: "Usuario",
        accessor: "username"
      },
      {
        Header: "Nombre",
        accessor: "name"
      },
      {
        Header: "Apellidos",
        accessor: "family_names"
      },
      {
        Header: "Correo Electrónico",
        accessor: "email"
      },
      {
        Header: "Contraseña",
        accessor: "password"
      },
      {
        Header: "Fecha de Registro",
        accessor: "registration_date"
      },
      {
        Header: "Estado",
        accessor: "status"
      }
    ],
    []
  );

  return columns;
}

// Agrega PropTypes para el componente de celda personalizada
useUserColumns.propTypes = {
  value: PropTypes.string // Define que 'value' debe ser una cadena de texto
};
