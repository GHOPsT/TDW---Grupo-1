import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import ManageBooks from './pages/book/ManageBooks';
import ManageUsers from './pages/user/ManageUsers';
import Biblioteca from './pages/book/Biblioteca';
import Book from './pages/book/Book'; // Tomar en cuenta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/managebooks" element={<ManageBooks />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/biblioteca/book/:id" element={<Book />} /> 
      </Routes>
    </Router>
  );
}

export default App;
