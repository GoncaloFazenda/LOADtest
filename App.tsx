import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedController from './src/presentation/movie/containers/FeedController';
import MovieDetailsController from './src/presentation/movie/containers/MovieDetailsController';
import {PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FeedController} />
          <Stack.Screen
            name="Movie Details"
            component={MovieDetailsController}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
