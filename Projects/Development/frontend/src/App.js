import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IniciarSesion from './pages/login/login';
import Registro from './pages/register/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<IniciarSesion/>}/>
        <Route path='/register' element={<Registro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
