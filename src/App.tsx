import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ButtonDemo from './pages/ButtonDemo';
import HamburgerButtonDemo from "./pages/HamburgerButtonDemo";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/button-demo" element={<ButtonDemo />} />
        <Route path="/hamburger-button-demo" element={<HamburgerButtonDemo />} />
      </Routes>
    </Router>
  );
};

export default App;
