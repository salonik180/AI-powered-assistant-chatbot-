import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Top Navigation */}
      <Navbar />

      {/* Footer always visible at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
