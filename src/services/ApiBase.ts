import {ApiResponse, ApisauceInstance, create} from 'apisauce';
import {TMDB_BASE_URL, TMDB_TOKEN} from '../utils/utils';
import {Movies} from './entities/Movie';
import PopularMoviesResponse from './responses/PopularMoviesResponse';
import FailedRequestResponse from './responses/FailedRequestResponse';

type ErrorResponse = {error: {code: string; message: string}};
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

  private parseResponse<T>(response: ApiResponse<T> & ApiResponse<ErrorResponse>) {
    if (response && response.ok) {
      return response.data as T;
    } else {
      if (response && response.data && response.data.error && response.data.error.code) {
        throw new FailedRequestResponse(response.data.error.code, response.data.error.message);
      } else if (response.problem === 'NETWORK_ERROR' || response.problem === 'TIMEOUT_ERROR') {
        throw new FailedRequestResponse('NETWORK_ERROR', "Can't reach the server. Please check your network settings");
      } else {
        throw new FailedRequestResponse('GENERAL_ERROR', 'Oops, something went wrong');
      }
    }
  }

  public getAllMovies = async () => {
    return this.parseResponse<PopularMoviesResponse>(await this.api.get('/movie/popular?language=en-US&page=1'));
  };
}
