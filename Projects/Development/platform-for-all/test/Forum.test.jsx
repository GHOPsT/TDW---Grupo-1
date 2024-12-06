import React from 'react';
import { render, screen } from '@testing-library/react';
import Forum from '../src/pages/forum/Forum.jsx';
import useForumData from '../src/hooks/manage-forum/forumDataHook.jsx';
import jest from 'jest-mock';

// Mock the useForumData hook
jest.mock('../src/hooks/manage-forum/forumDataHook');

describe('Forum Component', () => {
  test('renders loading state', () => {
    useForumData.mockReturnValue({ forums: [], loading: true, error: null });
    render(<Forum />);
    
    // Check if the loading text is present
    expect(screen.getByText(/Cargando foros.../i)).toBeInTheDocument();
  });

  test('renders error state', () => {
    useForumData.mockReturnValue({ forums: [], loading: false, error: 'Error message' });
    render(<Forum />);
    
    // Check if the error text is present
    expect(screen.getByText(/Error: Error message/i)).toBeInTheDocument();
  });

  test('renders forum component with data', () => {
    useForumData.mockReturnValue({ forums: [{ id: 1, title: 'Test Forum' }], loading: false, error: null });
    render(<Forum />);
    
    // Check if the select element is present
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    
    // Check if the forum data is rendered
    expect(screen.getByText(/Test Forum/i)).toBeInTheDocument();
  });
});