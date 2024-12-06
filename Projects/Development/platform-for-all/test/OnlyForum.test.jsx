import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import OnlyForum from '../src/pages/forum/OnlyForum';
import useForumData from '../src/hooks/manage-forum/onflyForumDataHook';
import jest from 'jest-mock'; // Import jest-mock

// Mock the useForumData hook
jest.mock('../src/hooks/manage-forum/onflyForumDataHook', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('OnlyForum Component', () => {
  test('renders forum not found state', () => {
    useForumData.mockReturnValue({ forums: [] });
    render(
      <MemoryRouter initialEntries={['/forum/1']}>
        <Routes>
          <Route path="/forum/:id" element={<OnlyForum />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Check if the "Foro no encontrado" text is present
    expect(screen.getByText(/Foro no encontrado/i)).toBeInTheDocument();
  });

  test('renders forum component with data', () => {
    useForumData.mockReturnValue({ forums: [{ id: 1, profileImage: 'image.jpg', author: 'Author', timeAgo: '1 hour ago' }] });
    render(
      <MemoryRouter initialEntries={['/forum/1']}>
        <Routes>
          <Route path="/forum/:id" element={<OnlyForum />} />
        </Routes>
      </MemoryRouter>
    );
    
    // Check if the forum data is rendered
    expect(screen.getByAltText(/Autor/i)).toBeInTheDocument();
    expect(screen.getByText(/Author/i)).toBeInTheDocument();
    expect(screen.getByText(/1 hour ago/i)).toBeInTheDocument();
  });
});