import {View, Text} from 'react-native';
import React from 'react';
import FeedScreen from './FeedScreen';

type Props = {
  navigation: any;
};

export default function FeedController(props: Props) {
  let movies: any = [];
  let error = '';

  function onPressViewDetails() {
    props.navigation.navigate('Movie Details');
  }

  return movies ? (
    <FeedScreen onPressViewDetails={onPressViewDetails} />
  ) : (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
