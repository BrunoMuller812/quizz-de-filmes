import { useEffect } from "react";

const MovieFetcher = ({ onFetchMovies }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      let allMovies = [];
      let page = 1;

      try {
        // Continuar buscando até que tenhamos pelo menos 100 filmes
        while (allMovies.length < 100) {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=f024c47f63aa01f439f0f7fc51d6d0d8&language=pt-BR&page=${page}`
          );

          if (!response.ok) {
            throw new Error("Erro ao buscar filmes.");
          }

          const data = await response.json();
          allMovies = [...allMovies, ...data.results]; // Adiciona os filmes da página atual

          page += 1; // Passa para a próxima página
        }

        // Envia apenas os 100 primeiros filmes para o componente MovieRanking
        onFetchMovies(allMovies.slice(0, 100));
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
