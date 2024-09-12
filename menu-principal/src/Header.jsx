import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className="header">
      <img
        src="src/assets/logo-teste.avif"
        alt="Logo"
        title="Logo"
        className="logo-icon-mobile"
      />
      <h1>Quizz de filmes</h1>
      <nav className="nav">
        <button
          className="menu-icon"
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          <img
            src="src/assets/menu-icon.png"
            alt="Botão de menu"
            title="Menu"
          />
        </button>
        <div className={`nav-menu ${isMenuActive ? "active" : ""}`}>
          <p>
            <a href="#">Informações da conta</a>
          </p>
          <p>
            <a href="#">Pontuação</a>
          </p>
          <p>
            <a href="#">Configurações</a>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
