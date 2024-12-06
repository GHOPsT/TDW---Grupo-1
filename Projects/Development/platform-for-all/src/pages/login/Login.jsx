import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../login/Login.css';
import ImgLogin from '../../assets/login-register/login-img.svg';
import { useAuth } from '../../contexts/AuthContext';
import RLogin1 from '../../assets/login-register/figura-login-1.svg';
import RLogin2 from '../../assets/login-register/figura-login-2.svg';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/src/data/userData.json');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();
      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        login(); // Autenticar usuario
        navigate('/home');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      console.error('Error al cargar los datos de usuario:', err);
      setError('Error al validar usuario');
    }
  };

  return (
    <div className="login-content">
      <div className="formulario-login">
        <div className="titulo">
          <span>Bienvenido</span>
          <span>a</span>
          <span>Aprendizaje para Todos</span>
        </div>
        <div className="form-login">
          <Form className="formulario" onSubmit={handleSubmit}>
            <Form.Group className="grupo-login">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                className="control-login"
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="control-login"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="button-submit">
                Iniciar Sesión
              </Button>
            </Form.Group>
          </Form>
          {error && <p className="error-message">{error}</p>}
          <p className="start-login">
            ¿No tienes cuenta?{' '}
            <span className="register-link" onClick={handleRegisterRedirect}>
              Registrar
            </span>
          </p>
        </div>
      </div>
      <div className="imagen-login">
        <img src={ImgLogin} alt="Imagen de login" className="img-login" />
      </div>
            <div className='rectangule-login'>
                <img src={RLogin2} alt="Rectangle2" className='imgLogin2'/>
                <img src={RLogin1} alt="Rectangle1" className='imgLogin1'/>
            </div>
    </div>
  );
}

export default Login;
