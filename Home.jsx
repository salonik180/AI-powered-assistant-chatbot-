import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         Welcome to Tharaka  personal virtual assistant 
      </motion.h1>

      <motion.p 
        className="home-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Interact with your virtual assistant, check campus events, or find help easily.
      </motion.p>

      <motion.div 
        className="nav-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Link to="/chatbot" className="btn glow-btn">Chatbot Assistant 🤖</Link>
        <Link to="/events" className="btn glow-btn">Campus Events 📅</Link>
        <Link to="/help" className="btn glow-btn">Help & Support 💬</Link>
      </motion.div>
    </div>
  );
};

export default Home;
