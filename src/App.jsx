import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/index.jsx";
import Franchises from "./pages/franchises.jsx";
import About from "./pages/about.jsx";
import HingLee from "./pages/hinglee.jsx";
import WingLee from "./pages/winglee.jsx";
import WingOn from "./pages/wingon.jsx";

export default function App() {
  return (
    <Router basename="/poultry-planner">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchises" element={<Franchises />} />
        <Route path="/franchises/hinglee" element={<HingLee />} />
        <Route path="/franchises/winglee" element={<WingLee />} />
        <Route path="/franchises/wingon" element={<WingOn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}