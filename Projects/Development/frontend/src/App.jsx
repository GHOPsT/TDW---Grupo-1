import "../src/styles/styles_general.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/settings/Setting";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/setting" element={<Setting />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
