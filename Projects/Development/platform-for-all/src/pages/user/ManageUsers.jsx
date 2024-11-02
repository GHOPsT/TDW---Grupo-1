import { useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import useRows from '../../hooks/manage-user/UseRowsUser';
import useColumns from '../../hooks/manage-user/UseColumnsUser';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import '../user/ManageUsers.css';

function ManageUsers() {
  const columns = useColumns();
  const data = useRows();

  // Agregar filtro global personalizado
  const filterData = (rows, columnIds, filterValue) => {
    const { value, column } = filterValue;
    if (!value) return rows; // Si no hay valor, retorna todas las filas
    return rows.filter(row =>
      String(row.values[column]).toLowerCase().includes(value.toLowerCase())
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5, pageIndex: 0 },
      globalFilter: filterData // Filtro global personalizado
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const [selectedColumn, setSelectedColumn] = useState("username");
  const [searchValue, setSearchValue] = useState("");

  const handleColumnChange = (e) => {
    const column = e.target.value;
    setSelectedColumn(column);
    setGlobalFilter({ value: searchValue, column });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setGlobalFilter({ value, column: selectedColumn });
  };

  return (
    <div className="content-mbook">
      <div className="content-show-table">
        <div className="search">
          <div className="select-filter">
            <Form.Select
              aria-label="Select Column"
              className="filtro-drop"
              onChange={handleColumnChange}
              value={selectedColumn}
            >
              <option value="username">Selecciona una columna...</option>
              {columns.map((column) => (
                <option key={column.id || column.accessor} value={column.accessor}>
                  {column.Header}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="input-search">
            <CiSearch className="logo-search" />
            <InputGroup>
              <Form.Control
                as="input"
                aria-label="With textarea"
                className="input-buscar"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Buscar..."
              />
            </InputGroup>
          </div>
        </div>
        <div className="tabla-mbook">
          <table {...getTableProps()}>
            <thead className="header-table-mbook">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className="row-header">
                  {headerGroup.headers.map(column => (
                    <th
                      key={column.id || column.accessor}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? 'desc'
                            : 'asc'
                          : ''
                      }
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="table-row">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="pagination">
          <span>
            Página <strong>{pageIndex + 1} de {pageOptions.length}</strong>
          </span>
          <div className="controls">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='button-pagination'>
              <BiFirstPage className="page-controller" />
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className='button-pagination'>
              <MdKeyboardArrowLeft className="page-controller" />
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage} className='button-pagination'>
              <MdKeyboardArrowRight className="page-controller" />
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='button-pagination'>
              <BiLastPage className="page-controller" />
            </button>
          </div>
          <Form.Select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className='select-pagination'>
            {[5, 10, 15, 20].map(size => (
              <option key={size} value={size}>Mostrar {size}</option>
            ))}
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
