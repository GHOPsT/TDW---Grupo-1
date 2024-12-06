import { FaHome, FaBook, FaUsers, FaClipboardList, FaSignOutAlt, FaUserCircle, FaFileUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const userName = Cookies.get('username') || 'Usuario';

    const handleLogout = () => {
        Cookies.remove('auth');
        Cookies.remove('username');
        navigate('/login');
    };

    return (
        <div className="sidebar-container">
            {/* Usuario */}
            <div className="sidebar-user">
                <FaUserCircle className="sidebar-icon-profile" />
                <span className="sidebar-username">{userName}</span>
            </div>

            {/* Opciones */}
            <div className="sidebar-options">
                <div className="sidebar-item" onClick={() => navigate('/home')}>
                    <FaHome className="sidebar-icon" />
                    <span>Home</span>
                </div>
                <div className="sidebar-item" onClick={() => navigate('/biblioteca')}>
                    <FaBook className="sidebar-icon" />
                    <span>Biblioteca</span>
                </div>
                <div className="sidebar-item" onClick={() => navigate('/manageusers')}>
                    <FaUsers className="sidebar-icon" />
                    <span>Usuarios</span>
                </div>
                <div className="sidebar-item" onClick={() => navigate('/managebooks')}>
                    <FaClipboardList className="sidebar-icon" />
                    <span>Libros</span>
                </div>
                <div className="sidebar-item" onClick={() => navigate('/registermaterial')}>
                    <FaFileUpload className="sidebar-icon" />
                    <span>Registrar Material</span>
                </div>
            </div>

            {/* Salir */}
            <div className="sidebar-item sidebar-logout" onClick={handleLogout}>
                <FaSignOutAlt className="sidebar-icon" />
                <span>Salir Sesión</span>
            </div>
        </div>
    );
};

export default Sidebar;
