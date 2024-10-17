import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/css/Header.css";
import HeaderMenu from "./components-sidebar/HeaderMenu"

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
        <div className="profile-container" onClick={toggleDropdown}>
          <img
            src="src/assets/profile.png"
            alt="Perfil"
            title="Perfil"
            className="profile-pic"
          />
        </div>

        <HeaderMenu/>

        {/* Nome da aplicação */}
        <div className="textos">
          <h1 className="nome">CineQuizz</h1>
        </div>
      </nav>

      
    </section>
  );
}
