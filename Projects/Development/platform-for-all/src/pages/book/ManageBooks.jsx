import { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import useRows from '../../hooks/manage-book/UseRows';
import useColumns from '../../hooks/manage-book/UseColumns';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import '../book/ManageBooks.css';

function ManageBooks() {
  const columns = useColumns();
  const data = useRows();

  // Estado para el valor de búsqueda y columna seleccionada
  const [selectedColumn, setSelectedColumn] = useState("titulo");
  const [searchValue, setSearchValue] = useState("");

  // Función de filtro personalizada para la columna seleccionada
  const filterData = useMemo(() => {
    return (rows, columnIds, filterValue) => {
      if (!filterValue) return rows;
      return rows.filter(row =>
        String(row.values[selectedColumn]).toLowerCase().includes(filterValue.toLowerCase())
      );
    };
  }, [selectedColumn]);

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
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      globalFilter: filterData,
      initialState: { pageSize: 5, pageIndex: 0 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Handlers para el filtro y columna seleccionada
  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
    setGlobalFilter(searchValue); // Actualiza el filtro para la nueva columna
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setGlobalFilter(value); // Aplica el filtro global
  };

  return (
    <div className="content-mbook">
      <div className="content-show-table">
        <div className="search">
          <div className="select-filter">
            <Form.Select aria-label="Select Column" className="filtro-drop" onChange={handleColumnChange} value={selectedColumn}>
              <option value="titulo">Selecciona una columna...</option>
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
              <Form.Control as="input" aria-label="With textarea" className="input-buscar" value={searchValue} onChange={handleSearchChange} placeholder="Buscar..." />
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
                      key={column.id || column.accessor} // Pasar el key directamente aquí
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

export default ManageBooks;
