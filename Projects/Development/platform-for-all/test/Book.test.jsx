import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Book from '../src/pages/book/Book.jsx';
import * as useRecommendationsHook from '../src/utils/useRecommendations';
import * as bookUtils from '../src/utils/bookUtils.jsx';
import jest from 'jest-mock'; // Import jest-mock

// Mock the useRecommendations hook and getBookById function
jest.mock('../src/utils/useRecommendations', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../src/utils/bookUtils', () => ({
  __esModule: true,
  getBookById: jest.fn(),
}));

describe('Book Component', () => {
  beforeEach(() => {
    useRecommendationsHook.default.mockReturnValue([]);
    bookUtils.getBookById.mockImplementation((id) => {
      if (id === '1') {
        return { id: '1', categoria: 'Fiction', title: 'Test Book' };
      }
      return null;
    });
  });

  test('renders loading state', () => {
    render(
      <MemoryRouter initialEntries={['/book/1']}>
        <Routes>
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Check if the loading text is present
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  test('renders book not found state', () => {
    render(
      <MemoryRouter initialEntries={['/book/2']}>
        <Routes>
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Check if the warning text is present
    expect(screen.getByText(/Libro con ID 2 no encontrado/i)).toBeInTheDocument();
  });

  test('renders book component with data', () => {
    render(
      <MemoryRouter initialEntries={['/book/1']}>
        <Routes>
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Check if the book data is rendered
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
  });
});