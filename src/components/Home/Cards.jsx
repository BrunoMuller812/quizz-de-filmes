import React from "react";
import { Link } from "react-router-dom";
import styles from "/src/css/HomeCSS/Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${styles.movieListCard}`}>
        <Link to="/movielist">
          <h2>Lista de Filmes</h2>
        </Link>
        <p>Veja sua lista personalizada de filmes.</p>
      </div>
      <div className={`${styles.card} ${styles.quizCard}`}>
        <Link to="/quiz">
          <h2>Jogar Quiz</h2>
        </Link>
        <p>Teste seus conhecimentos sobre filmes!</p>
      </div>
      <div className={`${styles.card} ${styles.rankingCard}`}>
        <Link to="/ranking">
          <h2>Ranking de Filmes</h2>
        </Link>
        <p>Confira os filmes mais bem avaliados.</p>
      </div>
    </div>
  );
};

export default Cards;
