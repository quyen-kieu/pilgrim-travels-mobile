import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { PaperTheme } from './src/theme';
import { RootNavigator } from './src/navigation';

export default function App() {
  return (
    <PaperProvider theme={PaperTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}