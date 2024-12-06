import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../src/pages/login/Login.jsx';

jest.mock('../src/hooks/manage-user/UseColumnsUser.jsx', () => ({
  UseColumnsUser: () => ({
    login: jest.fn(),
  }),
}));

describe('Login Component', () => {
  test('renders login component', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    // Check if the "No tienes cuenta?" text is present
    expect(screen.getByText(/¿No tienes cuenta?/i)).toBeInTheDocument();
    
    // Check if the "Registrar" link is present and clickable
    const registerLink = screen.getByText(/Registrar/i);
    expect(registerLink).toBeInTheDocument();
    fireEvent.click(registerLink);
    
    // Check if the login image is present
    const loginImage = screen.getByAltText(/Imagen de login/i);
    expect(loginImage).toBeInTheDocument();
    
    // Check if the rectangle images are present
    const rectangleImage1 = screen.getByAltText(/Rectangle1/i);
    const rectangleImage2 = screen.getByAltText(/Rectangle2/i);
    expect(rectangleImage1).toBeInTheDocument();
    expect(rectangleImage2).toBeInTheDocument();
  });
});