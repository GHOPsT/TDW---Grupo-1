import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Biblioteca from '../src/pages/book/Biblioteca.jsx';

const categories = ['Fiction', 'Non-Fiction'];
const searchTitle = '';

describe('Biblioteca Component', () => {
  test('renders categories in select dropdown', () => {
    render(
      <MemoryRouter>
        <Biblioteca categories={categories} searchTitle={searchTitle} />
      </MemoryRouter>
    );
    
    // Check if the default option is present
    expect(screen.getByText(/Seleccionar .../i)).toBeInTheDocument();
    
    // Check if the categories are rendered in the dropdown
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test('renders search input and handles input change', () => {
    const handleSearchChange = jest.fn();
    render(
      <MemoryRouter>
        <Biblioteca categories={categories} searchTitle={searchTitle} handleSearchChange={handleSearchChange} />
      </MemoryRouter>
    );
    
    // Check if the search input is present
    const searchInput = screen.getByPlaceholderText(/Buscar por título.../i);
    expect(searchInput).toBeInTheDocument();
    
    // Simulate input change
    fireEvent.change(searchInput, { target: { value: 'Test Title' } });
    expect(handleSearchChange).toHaveBeenCalled();
  });
});