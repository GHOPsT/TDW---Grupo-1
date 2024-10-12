import React from 'react';
import { FaUser, FaBook, FaForumbee } from 'react-icons/fa';
import './Home.css'; // Import the custom styles for the home page

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Admin Dashboard</h1>
      <p className="home-description">
        Manage your platform efficiently with the links below.
      </p>

      <div className="home-links-grid">
        <a href="/user" className="home-link-card">
          <FaUser className="home-link-icon" />
          <h3 className="home-link-title">Manage Users</h3>
          <p className="home-link-description">View, edit, and manage users in the system.</p>
        </a>

        <a href="/Foro" className="home-link-card">
          <FaForumbee className="home-link-icon" />
          <h3 className="home-link-title">Manage Forums</h3>
          <p className="home-link-description">Create, edit, and moderate forum posts.</p>
        </a>

        <a href="/Biblioteca" className="home-link-card">
          <FaBook className="home-link-icon" />
          <h3 className="home-link-title">Manage Books</h3>
          <p className="home-link-description">Add, edit, and categorize books.</p>
        </a>
      </div>
    </div>
  );
};

export default Home;

