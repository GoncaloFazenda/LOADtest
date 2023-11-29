import asyncWrapper from '../../helpers/asyncWrapper';
import ApiBase from '../ApiBase';
import {Movies} from '../entities/Movie';
import PopularMoviesResponse from '../responses/PopularMoviesResponse';

type PopularMoviesWithErrors = {
  movies: PopularMoviesResponse | null;
  error: Error | null;
};

export async function getAllMoviesThunk(): Promise<PopularMoviesWithErrors> {
  const api = ApiBase.getInstance();

  const [movies, error] = await asyncWrapper(api.getAllMovies());
  return {movies, error};
}
