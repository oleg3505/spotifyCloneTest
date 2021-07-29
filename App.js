import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { DripsyProvider } from 'dripsy';

const theme = {
  colors: {
    text: 'green',
    background: 'red',
  },
};

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
