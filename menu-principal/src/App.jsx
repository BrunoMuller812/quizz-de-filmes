import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Configuracoes from "./components/Configuracoes/Configuracoes";
import Header from "./components/Header"; // Import Header
import MovieRanking from "./components/Ranking/MovieRanking";
import MovieList from "./components/MovieList/MovieList";
import LoginPage from "./components/LoginPage/LoginPage"; // Import LoginPage
import { ThemeProvider, useTheme } from "../Context/ThemeContext";
import "./css/App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Main /> {/* Colocando o Router no nível superior */}
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation(); // Colocando o useLocation aqui, dentro do Router

  return (
    <>
      {/* Condicionar a renderização do Header */}
      {location.pathname !== "/" && <Header />} {/* Exibe o Header somente se a URL não for "/" */}

      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Página de login */}
        <Route path="/home" element={<Home />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/ranking" element={<MovieRanking />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
