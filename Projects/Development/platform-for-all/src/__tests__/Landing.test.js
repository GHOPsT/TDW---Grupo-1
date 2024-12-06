import { render, screen } from '@testing-library/react';
import Landing from '../pages/landing/Landing';

test('muestra el mensaje de bienvenida', () => {
  render(<Landing />);
  expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
});
