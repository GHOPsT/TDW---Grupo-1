import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../axios'; // Asegúrate de importar el archivo axios
import './Home.css'; // Ruta de tu archivo CSS

function Home() {
    const [message, setMessage] = useState(''); // Para almacenar el mensaje recibido
    const navigate = useNavigate();

    useEffect(() => {
        // Hacer la solicitud GET al backend para obtener el mensaje
        const fetchMessage = async () => {
            try {
                const response = await api.get('/'); // Ruta definida en el backend
                setMessage(response.data); // Establecer el mensaje recibido en el estado
            } catch (error) {
                console.error('Error al obtener el mensaje:', error);
            }
        };

        fetchMessage(); // Llamar la función cuando el componente se monte
    }, []); // Se ejecuta solo una vez cuando el componente se monta

    const handleNavigation = (path) => {
        navigate(path); // Navegar a la ruta proporcionada
    };

    return (
        <div className="home-container">
            <div className="welcome-message">
                <h1>{message} Willy y Axel</h1>
            </div>

            <div className="buttons-container">
                <button className="home-button" onClick={() => handleNavigation('/biblioteca')}>
                    Ir a Biblioteca
                </button>
                <button className="home-button" onClick={() => handleNavigation('/managebooks')}>
                    Gestionar Libros
                </button>
                <button className="home-button" onClick={() => handleNavigation('/manageusers')}>
                    Gestionar Usuarios
                </button>
                <button className="home-button" onClick={() => handleNavigation('/forum')}>
                    Registrar Usuario
                </button>
            </div>
        </div>
    );
}

export default Home;
