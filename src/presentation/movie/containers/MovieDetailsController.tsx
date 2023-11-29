import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import MovieDetailsScreen from './MovieDetailsScreen';
import Movie from '../../../services/entities/Movie';

type Props = {
  navigation: any;
  route: any;
};

export default function MovieDetailsController(props: Props) {
  const {movieData} = props.route.params as {movieData: Movie};
  console.log('akiiii id:   ', movieData.id);

  useEffect(() => {
    // props.navigation.setOptions({
    //   title: movieData.title,
    // });
  }, []);
  return <MovieDetailsScreen />;
}
