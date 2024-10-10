// src/App.js
import React from "react";
import Home from "./components/Home/Home";
import Configuracoes from "./components/Configuracoes/configuracoes";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "/Context/ThemeContext";
import "./css/App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/configuracoes">Configurações</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
