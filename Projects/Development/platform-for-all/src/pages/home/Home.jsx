import { useEffect, useState } from 'react';
import api from '../../axios'; // Asegúrate de importar el archivo axios
import '../home/Home.css';

function Home() {
    const [message, setMessage] = useState(''); // Para almacenar el mensaje recibido

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

    return (
        <div className="pruebahome">
            <h1>{message} Willy y Axel</h1> {/* Muestra el mensaje de "Hello World" */}
        </div>
    );
}

export default Home;
