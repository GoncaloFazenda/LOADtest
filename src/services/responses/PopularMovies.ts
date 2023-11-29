import Movie from '../entities/Movie';

type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default PopularMoviesResponse;
