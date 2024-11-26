import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Landing from './pages/landing/Landing';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import ManageBooks from './pages/book/ManageBooks';
import ManageUsers from './pages/user/ManageUsers';
import Biblioteca from './pages/book/Biblioteca';
import Book from './pages/book/Book';
import Home from './pages/home/Home';
import Forum from './pages/forum/Forum';
import OnlyForum from './pages/forum/OnlyForum';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route 
        path="/home" 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
        
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/managebooks" 
        element={
          <PrivateRoute>
            <ManageBooks />
          </PrivateRoute>
        }
      />
      <Route 
        path="/manageusers" 
        element={
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        }
      />
      <Route 
        path="/biblioteca" 
        element={
          <PrivateRoute>
            <Biblioteca />
          </PrivateRoute>
        }
      />
      <Route path="/biblioteca/book/:id" element={<Book />} /> {/* Esta no requiere protección */}
      <Route 
        path="/forum" 
        element={
          <PrivateRoute>
            <Forum />
          </PrivateRoute>
        }
      />
      <Route path="/forum/:id" element={<OnlyForum />} />
    </Routes>
  );
}

export default App;
