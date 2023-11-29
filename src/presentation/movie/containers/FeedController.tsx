import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedScreen from './FeedScreen';
import Movie, {Movies} from '../../../services/entities/Movie';
import ApiBase from '../../../services/ApiBase';

type Props = {
  navigation: any;
};

export default function FeedController(props: Props) {
  const [movies, setMovies] = useState<Movies>();
  let error = '';

  function onPressViewDetails(movieData: Movie) {
    props.navigation.navigate('Movie Details', {movieData});
  }

  async function getAllMovies() {
    const resp: Movies = await ApiBase.getInstance().getAllMovies();
    setMovies(resp);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return movies ? (
    <FeedScreen movies={movies} onPressViewDetails={movie => onPressViewDetails(movie)} />
  ) : (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
