import React from "react";
import styles from "./Cards.module.css"; // Usando CSS Modules

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} id="quizCard">
        <h2>Jogar Quiz</h2>
        <p>Teste seus conhecimentos sobre filmes!</p>
      </div>
      <div className={styles.card} id="movieListCard">
        <h2>Minha Lista de Filmes</h2>
        <p>Veja sua lista personalizada de filmes.</p>
      </div>
      <div className={styles.card} id="rankingCard">
        <h2>Ranking de Filmes</h2>
        <p>Confira os filmes mais bem avaliados.</p>
      </div>
    </div>
  );
};

export default Cards;
