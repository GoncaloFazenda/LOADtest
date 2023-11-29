import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FeedController from '../presentation/movie/containers/FeedController';
import MovieDetailsController from '../presentation/movie/containers/MovieDetailsController';
import Movie from '../services/entities/Movie';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FeedController} />
        <Stack.Screen
          name="Movie Details"
          component={MovieDetailsController}
          options={({navigation, route}) => ({
            title: (route.params as {movieData: Movie}).movieData.title
              ? (route.params as {movieData: Movie}).movieData.title
              : 'Movie Details',
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
