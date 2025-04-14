import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inicial from "./pages/inicial"; // nova tela simples
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicial" element={<Inicial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;