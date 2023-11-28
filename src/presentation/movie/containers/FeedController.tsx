import {View, Text} from 'react-native';
import React from 'react';

export default function FeedController() {
  let movies: any = [];
  let error = '';

  return movies ? (
    <View></View>
  ) : (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
