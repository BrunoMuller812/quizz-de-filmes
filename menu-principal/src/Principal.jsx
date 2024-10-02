import "./Principal.css";
import Cards from "./Cards";

const Principal = () => {
  return (
    <div className="principal-content">
      <div className="user-info">
        <img
          src="src/assets/profile.png"
          alt="Foto do avatar do usuário"
          title="Avatar"
          className="user-image"
        />
        <h2 className="user-name">Nome do usuário</h2>
      </div>
      <Cards />
    </div>
  );
};

export default Principal;
