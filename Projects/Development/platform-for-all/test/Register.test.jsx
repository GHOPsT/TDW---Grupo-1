import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '../src/pages/login/Register.jsx';

describe('Register Component', () => {
  test('renders register component', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    
    // Check if the register image is present
    const registerImage = screen.getByAltText(/Imagen de Registro/i);
    expect(registerImage).toBeInTheDocument();
    
    // Check if the triangle images are present
    const triangleImage1 = screen.getByAltText(/triangulo1/i);
    const triangleImage2 = screen.getByAltText(/triangulo2/i);
    expect(triangleImage1).toBeInTheDocument();
    expect(triangleImage2).toBeInTheDocument();
  });
});