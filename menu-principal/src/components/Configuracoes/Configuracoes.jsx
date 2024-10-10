import React from "react";
import { useTheme } from "/Context/ThemeContext";
import styles from "/src/css/ConfiguracoesCSS/Configuracoes.module.css";

const Configuracoes = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.configContainer}>
      <h1 className={styles.title}>Configurações</h1>

      <div className={styles.option}>
        <span className={styles.label}>Tema atual:</span>
        <button className={styles.button} onClick={toggleTheme}>
          Alternar para {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className={styles.option}>
        <span className={styles.label}>Idioma:</span>
        <select className={styles.select}>
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
          <option value="es">Espanhol</option>
          <option value="fr">Francês</option>
        </select>
      </div>
    </div>
  );
};

export default Configuracoes;
