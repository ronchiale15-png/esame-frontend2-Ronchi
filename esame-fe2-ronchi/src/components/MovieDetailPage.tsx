import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { MovieDetail } from "../types/movie";
import Poster from "./Poster";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data: MovieDetail) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento del dettaglio:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>

      {loading || !movie ? (
        <p>Caricamento...</p>
      ) : (
        <article className="detail">
          <div>
            <Poster
              posterPath={movie.poster_path}
              title={movie.title}
              variant="detail"
            />
          </div>

          <div>
            <h1 className="detail__title">{movie.title}</h1>
            <p className="detail__tagline">“{movie.tagline}”</p>

            <ul className="detail__meta">
              <li>Uscita: {movie.release_date}</li>
              <li>Durata: {movie.runtime} min</li>
              <li>Voto: {movie.vote_average.toFixed(1)}</li>
              <li>Voti: {movie.vote_count}</li>
              <li>Stato: {movie.status}</li>
              <li>Lingua: {movie.original_language}</li>
            </ul>

            <div className="detail__genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="detail__overview-label">Trama</p>
            <p className="detail__overview">{movie.overview}</p>

            <p className="card__meta">
              Produzione:{" "}
              {movie.production_companies.map((c) => c.name).join(" · ")}
            </p>
          </div>
        </article>
      )}
    </>
  );
};

export default MovieDetailPage;