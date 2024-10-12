import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./component/navbar/Navbar";
import AppLanding from "./pages/landing/AppLanding";
import GestionForo from "./pages/foro/GestionForo";
import Biblioteca from "./pages/biblioteca/Biblioteca";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AppLanding />}/>;
            <Route path="/GestionForo" element={<GestionForo />}/>;
            <Route path="/Biblioteca" element={<Biblioteca />}/>;
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
