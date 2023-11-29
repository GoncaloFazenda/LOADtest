import asyncWrapper from '../../helpers/asyncWrapper';
import ApiBase from '../ApiBase';
import {Movies} from '../entities/Movie';
import GenreResponse from '../responses/GenreResponse';
import PopularMoviesResponse from '../responses/PopularMoviesResponse';

type PopularMoviesWithErrors = {
  movies: PopularMoviesResponse | null;
  error: Error | null;
};

type GenresWithErrors = {
  genres: GenreResponse | null;
  error: Error | null;
};

export async function getAllMoviesThunk(): Promise<PopularMoviesWithErrors> {
  const api = ApiBase.getInstance();

  const [movies, error] = await asyncWrapper(api.getAllMovies());
  return {movies, error};
}
export async function getGenreByIdThunk(genre_ids: number[]): Promise<[GenreResponse[] | null, Error | any]> {
  const api = ApiBase.getInstance();
  let genres: GenreResponse[] = [];

  try {
    for (let i = 0; i < genre_ids.length; i++) {
      let genre = await api.getGenreById(genre_ids[i]);
      genres.push(genre);
    }
    return [genres, null];
  } catch (e) {
    return [null, e];
  }
}
