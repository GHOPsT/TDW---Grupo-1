import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './images/image_register.png'; // Cambia la imagen si es necesario
import './register.css'; // Cambia el archivo CSS si es necesario

const Registro = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [confirmarContrasenia, setConfirmarContrasenia] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (nombreUsuario && correo && contrasenia && confirmarContrasenia) {
            if (contrasenia === confirmarContrasenia) {
                console.log('Registro exitoso');
                navigate('/home');
            } else {
                alert('Las contraseñas no coinciden.');
            }
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div className='container'>
            <div className='right'>
                <img className='in-se' src={image} alt='Registrarse' />
            </div>
            <div className='left'>
                <div className='tittle'>
                    Completa el formulario
                </div>
                <div className='form'>
                    <div>
                        <label htmlFor='nombreUsuario'>Nombre de Usuario</label>
                        <input 
                            className='nombreUsuario' 
                            placeholder='Nombre de Usuario' 
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                        <label htmlFor='correo'>Correo Electrónico</label>
                        <input 
                            type='email' 
                            className='correo' 
                            placeholder='Correo Electrónico' 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <label htmlFor='contrasenia'>Contraseña</label>
                        <input 
                            type='password' 
                            className='contrasenia' 
                            placeholder='**********' 
                            value={contrasenia}
                            onChange={(e) => setContrasenia(e.target.value)}
                        />
                        <label htmlFor='confirmarContrasenia'>Confirmar Contraseña</label>
                        <input 
                            type='password' 
                            className='confirmarContrasenia' 
                            placeholder='**********' 
                            value={confirmarContrasenia}
                            onChange={(e) => setConfirmarContrasenia(e.target.value)}
                        />
                    </div>
                    <button onClick={handleRegister}>
                        Registrar
                    </button>
                    <div className='login'>
                        ¿Ya tienes una cuenta? {''}
                        <span className='login-link' onClick={() => navigate('/login')}>
                            Iniciar Sesión
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
