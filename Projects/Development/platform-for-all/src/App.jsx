import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import ManageBooks from './pages/book/ManageBooks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/managebooks" element={<ManageBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
