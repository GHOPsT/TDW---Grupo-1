import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./component/navbar/Navbar";
import AppLanding from "./pages/landing/AppLanding";
import GestionForo from "./pages/foro/GestionForo";
import IniciarSesion from './pages/login/login';
import Registro from './pages/register/register';
import RegistrarMaterial from "./pages/material_register/material_register";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AppLanding />}/>
            <Route path="/GestionForo" element={<GestionForo />}/>
            <Route path='/login' element={<IniciarSesion/>}/>
            <Route path='/register' element={<Registro/>}/>
            <Route path='/material_register' element={<RegistrarMaterial/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
