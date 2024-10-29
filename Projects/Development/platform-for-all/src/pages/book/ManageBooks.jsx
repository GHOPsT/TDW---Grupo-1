import { useTable, useSortBy } from 'react-table';
import useRows from '../../hooks/mange-book/UseRows';
import useColumns from '../../hooks/mange-book/UseColumns';
import '../book/ManageBooks.css';

function ManageBooks() {
  const columns = useColumns();
  const data = useRows();

  // Usamos `useTable` y `useSortBy` juntos
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <div className="content-mbook">
      <div className="content-show-table">
        <div className="search">
          Filtro y Búsqueda
        </div>
        <div className="tabla-mbook">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
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
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-mbook">
        pagination
      </div>
    </div>
  );
}

export default ManageBooks;
