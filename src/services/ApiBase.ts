import {ApiResponse, ApisauceInstance, create} from 'apisauce';
import {TMDB_BASE_URL, TMDB_TOKEN} from '../utils/utils';
import Movie, {Movies} from './entities/Movie';
import PopularMoviesResponse from './responses/PopularMovies';

export default class ApiBase {
  private static instance: ApiBase;

  private api: ApisauceInstance;

  private constructor(baseURL = TMDB_BASE_URL) {
    this.api = create({
      baseURL: baseURL,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
      timeout: 10000,
    });
  }

  public static getInstance(): ApiBase {
    if (!this.instance) {
      this.instance = new ApiBase();
    }
    return this.instance;
  }

  public getAllMovies = async (): Promise<Movies> => {
    const resp = await this.api.get('/movie/popular?language=en-US&page=1');
    const data = resp.data as PopularMoviesResponse;
    return data.results;
  };
}
