import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Chatbot from "../pages/Chatbot";
import Events from "../pages/Events";
import Help from "../pages/Help";
import "./Navbar.css";
import logo from "../assets/logo.png"; // correct import

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo + Name */}
          <div className="nav-logo">
            <img src={logo} alt="Tharaka University Logo" className="logo-img" />
            <span>Tharaka AI Portal</span>
          </div>

          {/* Links */}
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/chatbot" className={location.pathname === "/chatbot" ? "active" : ""}>Chatbot</Link>
            <Link to="/events" className={location.pathname === "/events" ? "active" : ""}>Events</Link>
            <Link to="/help" className={location.pathname === "/help" ? "active" : ""}>Help</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</div>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/events" element={<Events />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    </>
  );
}

function NavbarWrapper() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default NavbarWrapper;
