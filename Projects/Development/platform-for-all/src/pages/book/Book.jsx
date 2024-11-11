import '../book/Book.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById } from '../../utils/bookUtils';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useRecommendations from '../../utils/useRecommendations';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Book() { // Aceptar id como prop
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    // Obtener recomendaciones basadas en la categoría del libro actual
    const recommendations = useRecommendations(book ? book.categoria : null, id);

    useEffect(() => {
        const fetchBook = () => {
            console.log("Buscando libro con ID:", id);
            const foundBook = getBookById(id);
            console.log("Libro encontrado:", foundBook); // Esto te ayudará a ver qué se devuelve
            if (foundBook) {
                setBook(foundBook);
            } else {
                console.warn(`Libro con ID ${id} no encontrado`);
            }
            setLoading(false);
        };

        fetchBook();
    }, [id]);


    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!book) {
        return <div>Libro no encontrado</div>;
    }

    return (
        <div className="content-book">
            <div className="back">
                <button className="back-button" onClick={() => navigate('/biblioteca')}>
                    <ArrowBackIcon style={{ fontSize: 'small', marginRight: '5px' }} />
                    Regresar
                </button>
            </div>
            <div className="section-book">
                <div className="cover">
                    <img src={book.portada} alt={book.titulo} className="book-cover" />
                </div>
                <div className="information-book">
                    <div className="infor">
                        <h2 className='title-book'>{book.titulo}</h2>
                        <p><strong>Resumen:</strong> {book.descripcion}</p>
                        <p><strong>Autor:</strong> {book.author}</p>
                        <p><strong>Categoría:</strong> {book.categoria}</p>
                        <p><strong>Fecha de publicación:</strong> {book.publishedDate}</p>
                    </div>
                    <div className="buttons-book">
                        <button>Descargar</button>
                        <button>Agregar a Favoritos</button>
                    </div>
                </div>
            </div>
            {/* Sección de Recomendaciones */}
            <div className="recomendations">
                <h3>Recomendaciones</h3>
                <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                    <Grid container spacing={2}>
                        {recommendations.map((rec) => (
                            <Grid item xs={3} key={rec.id}>
                                <Paper
                                    elevation={3}
                                    className="recommendation-paper"
                                    onClick={() => navigate(`/biblioteca/book/${rec.id}`)} // Ajuste aquí
                                >
                                    <img src={rec.portada} alt={rec.titulo} className="recommendation-cover" />
                                    <h4>{rec.titulo}</h4>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Book;
