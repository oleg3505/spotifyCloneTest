import React, { useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { DripsyProvider } from 'dripsy';
import { createStore, Provider } from './stores/createStore';
import * as SplashScreen from 'expo-splash-screen';
import { screens } from './navigation/screens';
import { StackActions } from '@react-navigation/native';

const theme = {
  colors: {
    primary: '#121212',
    background: 'red',
    inputBG: '#FFFFFF',
  },
};

const store = createStore();

export default function App() {
  const navigationRef = useRef();
  useEffect(() => {
    async function awaitBootstrap() {
      const log = await store.bootstrap();

      navigationRef.current?.dispatch(
        StackActions.replace(log ? screens.Tab : screens.Auth),
      );
      await SplashScreen.hideAsync();
    }
    awaitBootstrap();
  }, []);

  return (
    <DripsyProvider theme={theme}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.3)" />
      <Provider>
        <AppNavigation ref={navigationRef} />
      </Provider>
    </DripsyProvider>
  );
}
