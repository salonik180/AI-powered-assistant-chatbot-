import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>🤖 Virtual Assistant</h2>
          <p>
            Your friendly AI chatbot ready to help, chat, and assist 24/7.  
            Smart. Simple. Always there for you.
          </p>
        </div>

        {/* Center Links */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/chat">Chatbot</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Right Social */}
        <div className="footer-right">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Virtual Assistant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
