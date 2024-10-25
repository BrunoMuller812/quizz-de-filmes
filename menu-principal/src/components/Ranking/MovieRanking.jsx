import React, { useState } from "react";
import MovieFetcher from "./MovieFetcher"; 

const MovieRanking = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchMovies = (fetchedMovies) => {
    setMovies(fetchedMovies);
    setLoading(false);
  };

  return (
    <div>
      <h1>Ranking dos 100 Melhores Filmes</h1>
      <MovieFetcher onFetchMovies={handleFetchMovies} />
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <ul>
          {movies.slice(0, 100).map((movie) => (
            <li key={movie.id}>
              {movie.title} - Nota: {movie.vote_average}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieRanking;
