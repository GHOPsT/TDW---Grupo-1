import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/login/Login';

test('renderiza formulario de login', () => {
  render(<Login />);

  expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Iniciar sesión/i })).toBeInTheDocument();
});

test('envía el formulario con datos válidos', () => {
  render(<Login />);

  fireEvent.change(screen.getByLabelText(/Correo electrónico/i), {
    target: { value: 'usuario@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/Contraseña/i), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /Iniciar sesión/i }));

  // Comprueba algún cambio esperado tras el envío
  expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
});
