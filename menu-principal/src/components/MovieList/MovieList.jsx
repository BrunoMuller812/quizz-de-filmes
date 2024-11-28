import React, { useState } from "react";
import { useMovies } from "../../../Context/MoviesContext";
import "/src/css/ListCSS/MovieList.css";

const MovieList = () => {
  const apiKey = "f024c47f63aa01f439f0f7fc51d6d0d8";
  const { movies, addMovie, removeMovie } = useMovies(); // Acessar estado global
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchMovies = (query) => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => setSuggestions(data.results))
        .catch((error) => console.error("Erro ao buscar filmes:", error));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="ranking_container">
      <h1 id="h1-ranking">Minha Lista de Filmes</h1>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchMovies(e.target.value);
        }}
        placeholder="Buscar filmes..."
      />
      <ul className="movies-list">
        {suggestions.slice(0, 5).map((movie) => (
          <li
            key={movie.id}
            className="movie-item"
            onClick={() => {
              addMovie(movie); // Adicionar ao estado global
              setQuery("");
              setSuggestions([]);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release">
                Ano: {new Date(movie.release_date).getFullYear()}
              </p>
              <p className="movie-rating">Nota: {movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="movies-list">
        {movies.length === 0 ? <p>Nenhum filme na lista.</p> : null}
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-release">
                Ano: {new Date(movie.release_date).getFullYear()}
              </p>
              <p className="movie-rating">Nota: {movie.vote_average}</p>
              <button
                className="remove-button"
                onClick={() => removeMovie(movie.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
