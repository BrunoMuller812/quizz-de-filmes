import React from "react";
import Home from "./components/Home/Home";
import Configuracoes from "./components/Configuracoes/Configuracoes";
import Header from "./components/Header";
import MovieRanking from "./components/Ranking/MovieRanking";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "../Context/ThemeContext";
import "./css/App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/ranking" element={<MovieRanking />} />
          <Route path="/movielist" element={<MovieList />} />
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
