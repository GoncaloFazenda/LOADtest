import {Movies} from '../entities/Movie';

type PopularMoviesResponse = {
  page: number;
  results: Movies;
  total_pages: number;
  total_results: number;
};

export default PopularMoviesResponse;
