import React from "react";
import { Link } from "react-router-dom";
import styles from "/src/css/HomeCSS/Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.cardContainer}>
        {/* Primeira Card */}
        <Link to="/movielist" className={`${styles.card} ${styles.linkContainer}`}>
          <h2>MINHA LISTA</h2>
          <img
            src="src/assets/ListaDeFilmsIMG.png"
            alt="Imagem Lista"
            className={styles.cardsIMG}
          />
          <div className={styles.cardDescription}>
            <span>Veja sua lista personalizada de filmes.</span>
            <p>
              Faça sua própria lista personalizada de seus filmes favoritos,
              avalie de acordo com estrelas e adicione comentários!
            </p>
          </div>
        </Link>

        {/* Segunda Card */}
        <Link to="/quiz" className={`${styles.card} ${styles.linkContainer}`}>
          <h2>JOGAR QUIZ</h2>
          <img
            src="src/assets/ListaDeFilmsIMG.png"
            alt="Imagem Quiz"
            className={styles.cardsIMG}
          />
          <div className={styles.cardDescription}>
            <span>Teste seus conhecimentos sobre filmes.</span>
            <p>
              Responda perguntas e veja como está seu nível de conhecimento
              sobre o mundo do cinema!
            </p>
          </div>
        </Link>

        {/* Terceira Card */}
        <Link to="/ranking" className={`${styles.card} ${styles.linkContainer}`}>
          <h2>RANKING DE FILMES</h2>
          <img
            src="src/assets/RankingIMG.png"
            alt="Imagem Ranking"
            className={styles.cardsIMG}
          />
          <div className={styles.cardDescription}>
            <span>Confira os filmes mais bem avaliados.</span>
            <p>
              Explore e descubra os filmes mais populares e melhor avaliados por outros
              usuários.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
