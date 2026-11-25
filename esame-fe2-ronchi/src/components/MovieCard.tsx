import { Link } from "react-router-dom";
import type { MovieCardProps } from "../types/props";
import Poster from "./Poster";

const MovieCard = ({ movie }: MovieCardProps) => {
  const formattedDate = movie.release_date
    ? movie.release_date.split("-").reverse().join("/")
    : "N/D";

  return (
    <article className="card">
      <Poster posterPath={movie.poster_path} title={movie.title} variant="card" />
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {formattedDate} · Voto: {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">{movie.overview}</p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;