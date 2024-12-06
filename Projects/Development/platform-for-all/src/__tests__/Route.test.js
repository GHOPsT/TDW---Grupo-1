import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renderiza la página de aterrizaje (Landing)', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Asegúrate de que un elemento en la Landing page esté visible
  expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
});

test('navega a /login y renderiza Login', () => {
  window.history.pushState({}, 'Test page', '/login');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Asegúrate de que el componente Login se renderice correctamente
  expect(screen.getByText(/Inicia sesión/i)).toBeInTheDocument();
});
