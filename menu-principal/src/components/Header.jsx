import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/css/Header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Função para alternar a abertura e fechamento do sidebar no mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Função para fechar o sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Função para alternar o dropdown no desktop
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Função para fechar o dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <section id="headerPai">
      <nav>
        {/* Foto de perfil, que aciona o dropdown */}

        {/* Nome da aplicação */}
        <div className="textos">
          <h1 className="nome">CineQuizz</h1>
        </div>

        {/* Menu dropdown no desktop */}
        <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <ul className="dropdownMenu">
            <li>
              <Link to="/configuracoes" onClick={closeDropdown}>
                Configurações
              </Link>
            </li>
            <li>
              <Link to="/conta" onClick={closeDropdown}>
                Conta
              </Link>
            </li>
            <li>
              <Link to="/pontuacao" onClick={closeDropdown}>
                Pontuação
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeDropdown}>
                Sobre o aplicativo
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-container" onClick={toggleDropdown}>
          <img
            src="src/assets/profile.png"
            alt="Perfil"
            title="Perfil"
            className="profile-pic"
          />
        </div>

        {/* Botão para abrir o menu lateral no modo mobile */}
        <button onClick={toggleSidebar} className="menuBarButton">
          <img
            src="src/assets/menu-icon.png"
            alt="Botão de menu"
            title="Menu"
            className="menuBar"
          />
        </button>
      </nav>

      {/* Sidebar com os links de navegação (para mobile) */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul className="dropdownMenu">
          <li>
            <Link to="/configuracoes" onClick={closeSidebar}>
              Configurações
            </Link>
          </li>
          <li>
            <Link to="/conta" onClick={closeSidebar}>
              Informações Da Conta
            </Link>
          </li>
          <li>
            <Link to="/pontuacao" onClick={closeSidebar}>
              Pontuação
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={closeSidebar}>
              Sobre o aplicativo
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
}
