import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ManageBooks from '../src/pages/book/ManageBooks.jsx';
import useRows from '../src/hooks/manage-book/UseRows';
import useColumns from '../src/hooks/manage-book/UseColumns';

// Mock the useRows and useColumns hooks
jest.mock('../src/hooks/manage-book/UseRows');
jest.mock('../src/hooks/manage-book/UseColumns');

describe('ManageBooks Component', () => {
  beforeEach(() => {
    useColumns.mockReturnValue([
      { Header: 'Title', accessor: 'title' },
      { Header: 'Author', accessor: 'author' }
    ]);
    useRows.mockReturnValue([
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' }
    ]);
  });

  test('renders manage books component', () => {
    render(<ManageBooks />);
    
    // Check if the search input is present
    expect(screen.getByPlaceholderText(/Buscar/i)).toBeInTheDocument();
    
    // Check if the table headers are rendered
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Author/i)).toBeInTheDocument();
    
    // Check if the table rows are rendered
    expect(screen.getByText(/Book 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Author 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Book 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Author 2/i)).toBeInTheDocument();
  });

  test('filters books based on search input', () => {
    render(<ManageBooks />);
    
    // Enter search value
    fireEvent.change(screen.getByPlaceholderText(/Buscar/i), { target: { value: 'Book 1' } });
    
    // Check if the filtered row is rendered
    expect(screen.getByText(/Book 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Book 2/i)).not.toBeInTheDocument();
  });
});