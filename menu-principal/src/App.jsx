import React from "react";
import Home from "./components/Home/Home";
import Configuracoes from "./components/Configuracoes/Configuracoes";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "/Context/ThemeContext";
import "./css/App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        {/* Adicionando o Header com as rotas */}
        <Header />
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
