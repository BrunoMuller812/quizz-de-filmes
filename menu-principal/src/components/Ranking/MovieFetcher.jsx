import { useEffect } from "react";

const MovieFetcher = ({ onFetchMovies }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=f024c47f63aa01f439f0f7fc51d6d0d8&language=pt-BR&page=1"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar filmes.");
        }

        const data = await response.json();
        onFetchMovies(data.results);
      } catch (err) {
        console.error("Erro:", err);
        onFetchMovies([]);
      }
    };

    fetchMovies();
  }, [onFetchMovies]);

  return null;
};

export default MovieFetcher;
