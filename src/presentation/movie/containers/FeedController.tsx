import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedScreen from './FeedScreen';
import Movie, {Movies} from '../../../services/entities/Movie';
import ApiBase from '../../../services/ApiBase';
import {getAllMoviesThunk} from '../../../services/thunks/MovieThunks';

type Props = {
  navigation: any;
};

export default function FeedController(props: Props) {
  const [movies, setMovies] = useState<Movies>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function onPressViewDetails(movieData: Movie) {
    props.navigation.navigate('Movie Details', {movieData});
  }

  async function getAllMovies() {
    setIsLoading(true);
    let response = await getAllMoviesThunk();
    if (response.movies && response.movies.results) setMovies(response.movies.results);
    else if (response.error) setErrorMessage(response.error.message);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <FeedScreen
      movies={movies}
      onPressViewDetails={movie => onPressViewDetails(movie)}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
}
