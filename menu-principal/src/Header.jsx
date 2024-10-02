import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <section id="headerPai">
      <nav>
        <img
          src="src/assets/logo-teste.avif"
          alt="Logo"
          title="Logo"
          className="logo-icon-mobile"
        />
        <div className="textos">
          <h1 className="nome">CineQuizz</h1>
        </div>

        <div className="menuItens">
          <ul className="minhaList">
            <li>
              <a href="#">Configurações</a>
            </li>
            <li>
              <a href="#">Informações Da Conta</a>
            </li>
            <li>
              <a href="#">Biblioteca De Filmes</a>
            </li>
            <li>
              <a href="#">Pontuação</a>
            </li>
          </ul>
        </div>

        <button onClick={toggleSidebar} className="menuBarButton">
          <img
            src="src/assets/menu-icon.png"
            alt="Botão de menu"
            title="Menu"
            className="menuBar"
          />
        </button>
      </nav>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul className="dropdownMenu">
          <li>
            <a href="#" onClick={closeSidebar}>
              Configurações
            </a>
          </li>
          <li>
            <a href="#" onClick={closeSidebar}>
              Informações Da Conta
            </a>
          </li>
          <li>
            <a href="#" onClick={closeSidebar}>
              Biblioteca De Filmes
            </a>
          </li>
          <li>
            <a href="#" onClick={closeSidebar}>
              Pontuação
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
}
