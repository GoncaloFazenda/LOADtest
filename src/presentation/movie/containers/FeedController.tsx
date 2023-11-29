import {View, Text} from 'react-native';
import React from 'react';
import FeedScreen from './FeedScreen';
import Movie from '../../../services/entities/Movie';

type Props = {
  navigation: any;
};

export default function FeedController(props: Props) {
  let movies: any = [];
  let error = '';

  function onPressViewDetails(movieData: Movie) {
    props.navigation.navigate('Movie Details', {movieData});
  }

  return movies ? (
    <FeedScreen onPressViewDetails={movie => onPressViewDetails(movie)} />
  ) : (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
