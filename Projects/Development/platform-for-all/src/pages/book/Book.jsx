import '../book/Book.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById } from '../../utils/bookUtils';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useRecommendations from '../../utils/useRecommendations';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function Book() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    const recommendations = useRecommendations(book ? book.categoria : null, id);

    useEffect(() => {
        const fetchBook = () => {
            const foundBook = getBookById(id);
            if (foundBook) {
                setBook(foundBook);
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
        <div className="content-book-id">
            <div className="back">
                <button className="back-button" onClick={() => navigate('/biblioteca')}>
                    <ArrowBackIcon /> Regresar
                </button>
            </div>
            <div className="section-book">
                <div className="cover">
                    <img src={book.portada} alt={book.titulo} className="book-cover-only" />
                </div>
                <div className="information-book">
                    <div className="infor">
                        <h2 className="title-book">{book.titulo}</h2>
                        <p><strong>Resumen:</strong> {book.descripcion}</p>
                        <p><strong>Autor:</strong> {book.author}</p>
                        <p><strong>Categoría:</strong> {book.categoria}</p>
                        <p><strong>Fecha de publicación:</strong> {book.publishedDate}</p>
                    </div>
                    <div className="buttons-book">
                        <button><DownloadIcon /> Descargar</button>
                        <button><FavoriteIcon /> Favoritos</button>
                    </div>
                </div>
            </div>
            <div className="recomendations">
                <h3>Recomendaciones</h3>
                <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                    <Grid container spacing={2}>
                        {recommendations.map((rec) => (
                            <Grid item xs={6} sm={4} md={3} key={rec.id}>
                                <Paper
                                    elevation={3}
                                    className="recommendation-paper"
                                    onClick={() => navigate(`/biblioteca/book/${rec.id}`)}
                                >
                                    <img src={rec.portada} alt={rec.titulo} className="recommendation-cover" />
                                    <h4>{rec.titulo}</h4>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            <div className="action-bar">
                <button className="action-button"><ShareIcon /> Compartir</button>
            </div>
        </div>
    );
}

export default Book;
