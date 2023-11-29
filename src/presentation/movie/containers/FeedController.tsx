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

  function onPressViewDetails(movieData: Movie) {
    props.navigation.navigate('Movie Details', {movieData});
  }

  async function getAllMovies() {
    let response = await getAllMoviesThunk();
    if (response.movies && response.movies.results) return setMovies(response.movies.results);
    else if (response.error) return setErrorMessage(response.error.message);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return <FeedScreen movies={movies} onPressViewDetails={movie => onPressViewDetails(movie)} errorMessage={errorMessage} />;
}
