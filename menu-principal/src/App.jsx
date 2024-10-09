import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./css/App.css";
import Qualquer from "./Qualquer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/qualquer">Qualquer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qualquer" element={<Qualquer />} />
      </Routes>
    </Router>
  );
}

export default App;
