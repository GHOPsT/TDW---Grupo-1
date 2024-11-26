import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Importa la librería js-cookie

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar si el usuario ya está autenticado al cargar la aplicación
        const storedAuth = Cookies.get('isAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        Cookies.set('isAuthenticated', 'true', { expires: 7 }); // Guardar en cookie por 7 días
        navigate('/home');
    };

    const logout = () => {
        setIsAuthenticated(false);
        Cookies.remove('isAuthenticated'); // Eliminar cookie
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Validación de propiedades con PropTypes
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo React válido
};

export const useAuth = () => useContext(AuthContext);
