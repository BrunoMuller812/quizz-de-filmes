import React, { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // Carregar filmes do Local Storage quando o contexto inicializa
  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  // Salvar filmes no Local Storage toda vez que o estado mudar
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    if (!movies.some((m) => m.id === movie.id)) {
      setMovies((prevMovies) => [...prevMovies, movie]);
    }
  };

  const removeMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, removeMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
