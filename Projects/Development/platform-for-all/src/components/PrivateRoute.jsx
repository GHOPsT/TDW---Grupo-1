import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Si no está autenticado, redirige a /login
        return <Navigate to="/login" />;
    }

    return children;
};

// Validación de propiedades con PropTypes
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo React válido
};
export default PrivateRoute;
