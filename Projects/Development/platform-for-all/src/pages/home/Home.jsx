import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../axios';
import './Home.css';
import { FaBook, FaUserAlt, FaUsers, FaClipboardList } from 'react-icons/fa'; // Importación de íconos

function Home() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await api.get('/');
                setMessage(response.data);
            } catch (error) {
                console.error('Error al obtener el mensaje:', error);
            }
        };
        fetchMessage();
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            {/* Banner */}
            <div className="banner">
                <img 
                    src="https://i.pinimg.com/736x/98/3f/18/983f18324531db75cabdf2cfda3168a2.jpg" 
                    alt="Banner" 
                    className="banner-image" 
                />
            </div>

            {/* Header */}
            <header className="header">
                <h1 className="header-title">{message} Bienvenido</h1>
                <p className="header-subtitle">Explora y gestiona recursos con facilidad</p>
            </header>

            {/* Botones */}
            <div className="buttons-grid">
                <div className="button-card" onClick={() => handleNavigation('/biblioteca')}>
                    <FaBook className="button-icon" />
                    <p>Ir a Biblioteca</p>
                </div>
                <div className="button-card" onClick={() => handleNavigation('/managebooks')}>
                    <FaClipboardList className="button-icon" />
                    <p>Gestionar Libros</p>
                </div>
                <div className="button-card" onClick={() => handleNavigation('/manageusers')}>
                    <FaUsers className="button-icon" />
                    <p>Gestionar Usuarios</p>
                </div>
                <div className="button-card" onClick={() => handleNavigation('/forum')}>
                    <FaUserAlt className="button-icon" />
                    <p>Registrar Usuario</p>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Grupo 01 | Plataforma de Gestión</p>
            </footer>
        </div>
    );
}

export default Home;
