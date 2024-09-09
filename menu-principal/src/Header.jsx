import gearIcon from "./assets/settings-icon.png";
import "./Header.css";

const Header = ({ onSettingsClick }) => {
  return (
    <header className="app-header">
      <div className="logo-section">
        <img src="" alt="" className="logo" />
        <h1 className="app-name">Movie Quiz</h1>
      </div>
      <div className="settings-section" onClick={onSettingsClick}>
        <img
          src={gearIcon}
          alt="Botão de configuração"
          title="Configurações"
          className="settings-image"
        />
      </div>
    </header>
  );
};

export default Header;
