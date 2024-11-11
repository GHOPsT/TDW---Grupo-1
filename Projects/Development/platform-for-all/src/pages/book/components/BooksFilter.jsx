// BooksFilter.js
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Dropdown, DropdownButton, FormControl } from "react-bootstrap";

function BooksFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalBooksAvailable = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const [filterColumn, setFilterColumn] = useState("titulo");

  const onFilterChange = useAsyncDebounce((value) => {
    setGlobalFilter({ value, column: filterColumn } || undefined);
  }, 200);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleDropdownChange = (column) => {
    setFilterColumn(column);
    onFilterChange(value);
  };

  return (
    <div className="books-filter" style={{ display: "flex", alignItems: "center" }}>
      <DropdownButton
        id="dropdown-basic-button"
        title={`Buscar por: ${filterColumn}`}
        onSelect={handleDropdownChange}
        style={{ marginRight: "10px" }}
      >
        <Dropdown.Item eventKey="id">ID</Dropdown.Item>
        <Dropdown.Item eventKey="titulo">Título</Dropdown.Item>
        <Dropdown.Item eventKey="autor">Autor</Dropdown.Item>
        <Dropdown.Item eventKey="categoria">Categoría</Dropdown.Item>
        <Dropdown.Item eventKey="fech_publicada">Fecha Publicada</Dropdown.Item>
        <Dropdown.Item eventKey="estado">Estado</Dropdown.Item>
      </DropdownButton>

      <FormControl
        size="lg"
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalBooksAvailable} libros disponibles...`}
        style={{ width: "400px" }}
      />
    </div>
  );
}

export default BooksFilter;
