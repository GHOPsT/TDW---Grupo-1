import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './images/image_register.png'; // Cambia la imagen si es necesario
import './register.css'; // Cambia el archivo CSS si es necesario

const Registro = () => {
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [confirmarContrasenia, setConfirmarContrasenia] = useState('');
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        if (nombreUsuario && correo && contrasenia && confirmarContrasenia) {
            if (contrasenia === confirmarContrasenia) {
                setRegistroExitoso(true);
                setTimeout(() => {
                    navigate('/home');
                    console.log('Registro exitoso');
                }, 2000);
            } else {
                alert('Las contraseñas no coinciden.');
            }
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div className='container'>
            {registroExitoso && (
                <div className='registro-exitoso'>
                    <div className='mensaje-exito'>
                        <span className='check'>✔️</span> Registro exitoso
                    </div>
                </div>
            )}
            <div className='right'>
                <img className='in-se' src={image} alt='Registrarse' />
            </div>
            <div className='left'>
                <div className='tittle'>
                    Completa el formulario
                </div>
                <div className='form'>
                    <div>
                        <label htmlFor='nombreCompleto'>Nombre Completo:</label>
                        <input 
                            className='nombreCompleto' 
                            value={nombreCompleto}
                            onChange={(e) => setNombreCompleto(e.target.value)}
                        />
                        <label htmlFor='nombreUsuario'>Usuario:</label>
                        <input 
                            className='nombreUsuario' 
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                        <label htmlFor='correo'>Correo Electrónico:</label>
                        <input 
                            type='email' 
                            className='correo' 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <label htmlFor='contrasenia'>Contraseña:</label>
                        <input 
                            type='password' 
                            className='contrasenia' 
                            placeholder='***************' 
                            value={contrasenia}
                            onChange={(e) => setContrasenia(e.target.value)}
                        />
                        <label htmlFor='confirmarContrasenia'>Confirmar Contraseña:</label>
                        <input 
                            type='password' 
                            className='confirmarContrasenia' 
                            placeholder='***************' 
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
