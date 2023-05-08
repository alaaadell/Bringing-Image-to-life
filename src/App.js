import "./App.css";
import "./home.css";
import "./Animate.css";
import Navbar from "./navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Animate from "./pages/Animate";
import Animate_mgif from "./pages/Animate_mgif";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log(window.location.pathname);
  return (
    <div className="container">
      <Navbar />
      <div className="container-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Animate" element={<Animate />} />
          <Route path="/Animate_mgif" element={<Animate_mgif />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
