import React from 'react';
import {PaperProvider} from 'react-native-paper';
import RootStack from './src/navigation/RootStack';

export default function App() {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
}
