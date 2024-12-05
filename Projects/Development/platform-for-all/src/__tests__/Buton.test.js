import { render, fireEvent, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

test('actualiza el estado al hacer clic en el botón', () => {
  render(<MyComponent />);

  const button = screen.getByRole('button', { name: /Clickeame/i });
  fireEvent.click(button);

  expect(screen.getByText(/Botón clickeado/i)).toBeInTheDocument();
});
