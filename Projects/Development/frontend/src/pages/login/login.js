import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import image from './images/image_login.png'
import './login.css';

const IniciarSesion = () => {
    const [ID_Usuario, setnombre_usuario] = useState('');
    const [Contrasenia, setcontrasenia] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (ID_Usuario && Contrasenia){
            console.log('Inicio de sesión exitoso');
            navigate('/home');
        }else {
            alert('Por favor, ingrese su usario y contraseña.');
        }
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='left'>
                <div className='tittle'>
                    Bienvenido a "Aprendizaje para Todos"
                </div>
                <div className='form'>
                    <div>
                        <label htmlFor='Usuario'>Usuario</label>
                        <input 
                            className='Usuario' 
                            placeholder='Usuario' v
                            alue={ID_Usuario}
                        />
                        <label htmlFor='Contrasenia'>Contraseña</label>
                        <input 
                            type="password" 
                            lassName='Contrasenia' 
                            placeholder='**********' 
                            value={Contrasenia}
                        />
                    </div>
                    <button>
                        Iniciar Sesión
                    </button>
                    <div className='register'>
                        ¿Todavia no estás registrado? {''}
                        <span className='register-link' onClick={handleRegister}>
                            Registrar
                        </span>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className='in-se' src={image} alt='inciar sesión'/>
            </div>
        </div>
    );
};

export default IniciarSesion;