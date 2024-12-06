import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/Home';

jest.mock('./context/AuthContext', () => ({
  useAuth: () => ({ isAuthenticated: true }), // Simula un usuario autenticado
}));

test('renderiza componente Home si el usuario está autenticado', () => {
  render(
    <BrowserRouter>
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    </BrowserRouter>
  );

  expect(screen.getByText(/Bienvenido a la página principal/i)).toBeInTheDocument();
});

test('redirecciona a Login si no está autenticado', () => {
  jest.mock('./context/AuthContext', () => ({
    useAuth: () => ({ isAuthenticated: false }), // Simula un usuario no autenticado
  }));

  render(
    <BrowserRouter>
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    </BrowserRouter>
  );

  // Comprueba que el componente Login o un mensaje de redirección esté presente
  expect(screen.getByText(/Inicia sesión/i)).toBeInTheDocument();
});
