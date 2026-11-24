import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/index.jsx";
import Networks from "./pages/networks.jsx";
import About from "./pages/about.jsx";
import HingLee from "./pages/hinglee.jsx";
import WingLee from "./pages/winglee.jsx";
import WingOn from "./pages/wingon.jsx";
import ShangLee from "./pages/shanglee.jsx";
import Highland from "./pages/highland.jsx";
import Imperial from "./pages/imperial.jsx";
import Vikon from "./pages/vikon.jsx";
import Dakao from "./pages/dakao.jsx";
import Baladi from "./pages/baladi.jsx";

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
        <Route path="/networks/shanglee" element={<ShangLee />} />
        <Route path="/networks/highland" element={<Highland />} />
        <Route path="/networks/imperial" element={<Imperial />} />
        <Route path="/networks/vikon" element={<Vikon />} />
        <Route path="/networks/dakao" element={<Dakao />} />
        <Route path="/networks/baladi" element={<Baladi />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}