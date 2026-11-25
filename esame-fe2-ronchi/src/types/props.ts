import type { MovieSummary } from "./movie";

export type MovieCardProps = {
  movie: MovieSummary;
};

export type PosterProps = {
  posterPath: string | null;
  title: string;
  variant: 'card' | 'detail';
};