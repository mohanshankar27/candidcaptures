
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ButtonDemo from './pages/ButtonDemo';
import HamburgerButtonDemo from "./pages/HamburgerButtonDemo";
import Portrait from './pages/categories/Portrait';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/button-demo" element={<ButtonDemo />} />
        <Route path="/hamburger-button-demo" element={<HamburgerButtonDemo />} />
      </Routes>
    </Router>
  );
};

export default App;
