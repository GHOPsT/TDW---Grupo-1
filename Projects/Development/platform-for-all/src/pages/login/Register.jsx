import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../login/Register.css';
import ImgRegister from '../../assets/login-register/register-img.svg';
import triangle1 from '../../assets/login-register/rectangulo-register-1.svg';
import triangle2 from '../../assets/login-register/rectangulo-register-2.svg';

function Register() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="register-content">
            <div className="imagen-register">
                <img src={ImgRegister} alt="Imagen de Registro" className="img-register" />
                <div className='rectangulos-register'>
                    <img src={triangle1} alt="triangulo1" className='img-rectangulo1'/>
                    <img src={triangle2} alt="triangulo2" className='img-rectangulo2'/>
                </div>
            </div>

            <div className="formulario-register">
                <p className="label-register">Completa el Formulario</p>
                
                <Form className="formulario">
                    <Form.Group className="grupo-registro">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="text" 
                            placeholder="Nombre completo"
                        />

                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            className="control-register" 
                            type="text" 
                            placeholder="Usuario"
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
