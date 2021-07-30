import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { DripsyProvider } from 'dripsy';

const theme = {
  colors: {
    primary: '#181818',
    background: 'red',
    inputBG: '#FFFFFF',
  },
};

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <AppNavigation />
    </DripsyProvider>
  );
}
