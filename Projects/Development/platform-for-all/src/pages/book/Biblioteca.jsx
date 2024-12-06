import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useBooks from '../../hooks/manage-book/useBooks';
import useCategories from '../../hooks/manage-book/useCategories';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../book/Biblioteca.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx';

function Biblioteca() {
  const navigate = useNavigate();
  const books = useBooks();
  const categories = useCategories();

  const pageSize = 8;
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTitle, setSearchTitle] = useState("");
  const [pageIndex, setPageIndex] = useState(0);

  // Ajuste: uso de 'category' y 'title' en lugar de 'categoria' y 'titulo'
  const filteredBooks = books
    .filter(book => book.category && book.title) // Confirmar que los campos existen
    .filter(book => 
      (selectedCategory === "todos" || book.category.toLowerCase() === selectedCategory.toLowerCase()) && 
      book.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

  const pageCount = Math.ceil(filteredBooks.length / pageSize);
  const paginatedBooks = filteredBooks.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  useEffect(() => {
    console.log("Books:", books); 
    console.log("Filtered Books:", filteredBooks); 
  }, [books, filteredBooks]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setPageIndex(0); 
  };

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
    setPageIndex(0); 
  };

  const gotoPage = (index) => setPageIndex(index);
  const nextPage = () => setPageIndex((prev) => Math.min(prev + 1, pageCount - 1));
  const previousPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));
  const canPreviousPage = pageIndex > 0;
  const canNextPage = pageIndex < pageCount - 1;

  return (
    <div className="content-bookstore">
      <div className="sidebar-biblioteca">
        <Sidebar />
      </div>
      <div className="contenidolibro">
        <div className="title">
        <span>Biblioteca</span>
      </div>
        <div className="content-books">
          <div className="search">
            <div className="select-filter">
              <Form.Select aria-label="Select Category" className="filtro-drop" onChange={handleCategoryChange} value={selectedCategory}>
                <option value="todos">Seleccionar ...</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
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
                  value={searchTitle}
                  onChange={handleSearchChange}
                  placeholder="Buscar por título..."
                />
              </InputGroup>
            </div>
          </div>

          {/* Grid de libros */}
          <div className="books">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {paginatedBooks.map((book) => (
                  <Grid item xs={3} sm={3} md={3} key={book.id}>
                    <Paper className="book-item">
                      <img src={book.cover} alt={book.title} className="book-cover" />
                      <p className="book-category">{book.category}</p>
                      <p className="book-title">{book.title}</p>
                      <Button className='buttondetail' onClick={() => navigate(`/biblioteca/book/${book.id}`)}>Aprender</Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>

          {/* Paginación */}
          <div className="pagination">
            <span>
              Página <strong>{pageIndex + 1} de {pageCount}</strong>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biblioteca;
