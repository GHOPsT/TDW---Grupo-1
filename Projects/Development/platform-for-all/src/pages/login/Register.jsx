import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../login/Register.css';
import ImgRegister from '../../assets/login-register/register-img.svg';

function Register() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="register-content">
            <div className="imagen-register">
                <img src={ImgRegister} alt="Imagen de Registro" className="img-register" />
            </div>

            <div className="formulario-register">
                <p className="label-register">Completa el Formulario</p>
                
                <Form className="formulario">
                    <Form.Group className="grupo-registro">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="text" 
                            placeholder="Max Bruno Saavedra Monterrey"
                        />

                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="text" 
                            placeholder="Maxbr"
                        />

                        <Form.Label>Correo</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="email" 
                            placeholder="name@example.com"
                        />

                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="password" 
                            placeholder="Contraseña"
                        />

                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="password" 
                            placeholder="Confirmar Contraseña"
                        />

                        <Button type="submit" className="button-submit">
                            Registrar
                        </Button>
                    </Form.Group>
                </Form>
                
                <p className="start-sesion">
                    ¿Tienes cuenta?{' '}
                    <span 
                        className="login-link" 
                        onClick={handleLoginRedirect}
                    >
                        Iniciar Sesión
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;
