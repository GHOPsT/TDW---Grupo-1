import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../login/Login.css';
import ImgLogin from '../../assets/login-register/login-img.svg';
import RLogin1 from '../../assets/login-register/figura-login-1.svg';
import RLogin2 from '../../assets/login-register/figura-login-2.svg';

function Login() {

    const navigate = useNavigate();

    const handleRegisterRedirect = () => {
        navigate('/register');
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
                    <Form className="formulario">
                        <Form.Group className="grupo-login">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control 
                                className="control-login" 
                                type="text" 
                                placeholder="Usuario"
                            />

                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                className="control-login" 
                                type="password" 
                                placeholder="Contraseña"
                            />

                            <Button type="submit" className="button-submit">
                                Iniciar Sesión
                            </Button>

                        </Form.Group>
                    </Form>
                    <p className="start-login">
                        ¿No tienes cuenta?{' '}
                        <span 
                            className="register-link" 
                            onClick={handleRegisterRedirect}
                        >
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