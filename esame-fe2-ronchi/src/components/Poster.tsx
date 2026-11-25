import type { PosterProps } from "../types/props";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Poster = ({ posterPath, title, variant }: PosterProps) => {
  const className = variant === "card" ? "card__poster" : "detail__poster";

  if (!posterPath) {
    return <div className={className}>Poster</div>;
  }

  return (
    <div className={className}>
      <img src={`${IMAGE_BASE_URL}${posterPath}`} alt={title} />
    </div>
  );
};

export default Poster;