import { useEffect, useState } from "react";
import type { MovieSummary, SearchMoviesResponse } from "../types/movie";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data: SearchMoviesResponse) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dei film:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesPage;