import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/index.jsx";
import Networks from "./pages/networks.jsx";
import About from "./pages/about.jsx";
import HingLee from "./pages/hinglee.jsx";
import WingLee from "./pages/winglee.jsx";
import WingOn from "./pages/wingon.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/networks/hinglee" element={<HingLee />} />
        <Route path="/networks/winglee" element={<WingLee />} />
        <Route path="/networks/wingon" element={<WingOn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}