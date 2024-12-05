import { render, screen } from '@testing-library/react';
import Home from '../home/Home.jsx'';

test('renderiza la página de inicio', () => {
  render(<Home />);
  expect(screen.getByText(/Bienvenido a la página principal/i)).toBeInTheDocument();
});
