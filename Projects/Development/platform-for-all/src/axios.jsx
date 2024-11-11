import axios from 'axios';

// Configura la URL base del backend
const api = axios.create({
  baseURL: 'http://localhost:8080/', // Cambia esto por la URL base de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
