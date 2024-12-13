import React from "react";
import { useTheme } from "/Context/ThemeContext";
import styles from "/src/css/SettingsCSS/configuracoes.module.css";

const Configuracoes = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.configContainer}>
      {/* Alternar Tema */}
      <div className={styles.option}>
        <span className={styles.label}>Tema atual:</span>
        <button className={styles.button} onClick={toggleTheme}>
          Alternar para {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Seleção de Idioma */}
      <div className={styles.option}>
        <span className={styles.label}>Idioma:</span>
        <select className={styles.select}>
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
          <option value="es">Espanhol</option>
          <option value="fr">Francês</option>
        </select>
      </div>

      {/* Botão de Notificações */}
      <div className={styles.option}>
        <span className={styles.label}>Notificações:</span>
        <button className={styles.button}>Ativar Notificações</button>
      </div>

      {/* Botão de Reset */}
      <div className={styles.option}>
        <span className={styles.label}>Redefinir Configurações:</span>
        <button className={styles.button}>Redefinir</button>
      </div>
    </div>
  );
};

export default Configuracoes;
