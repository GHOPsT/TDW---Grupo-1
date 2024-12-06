import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Importa la librería js-cookie

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Leer el estado de autenticación de las cookies
        const authCookie = Cookies.get('auth');
        if (authCookie) {
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
        Cookies.remove('auth'); // Eliminar cookie
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


