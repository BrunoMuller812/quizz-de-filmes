import "/src/css/HomeCSS/Home.css";
import Header from "../Header";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-content">
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
    </>
  );
};

export default Home;
