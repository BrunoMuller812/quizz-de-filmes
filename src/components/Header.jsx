import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "/Context/AuthContext";
import styles from "/src/css/Header.module.css";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useAuth(); // Pega informações do contexto de autenticação
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const avatar = localStorage.getItem(`${currentUser}_avatar`) || "src/assets/profile.png";

  return (
    <header className={styles.headerPai}>
      <nav className={styles.nav}>
        {/* Logo do site */}
        <div className={styles.logoContainer}>
          <Link to="/home">
            <img
              src="src/assets/logo-desktop.png"
              alt="Logo do site"
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Avatar com dropdown */}
        <div className={styles.profileContainer} onClick={toggleDropdown}>
          <img
            src={avatar}
            alt="Avatar do usuário"
            className={styles.profilePic}
          />

          {dropdownOpen && (
            <ul className={styles.dropdown}>
              <li>
                <Link to="/settings/account/" className={styles.dropdownLink}>
                  Sua conta
                </Link>
              </li>
              <li>
                <Link to="/settings/configurations/" className={styles.dropdownLink}>
                  Configurações
                </Link>
              </li>
              <li>
                <button
                  className={`${styles.dropdownLink} ${styles.logoutButton}`}
                  onClick={handleLogout}
                >
                  Deslogar
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
