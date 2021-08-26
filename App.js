import React, { useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { DripsyProvider } from 'dripsy';
import { createStore, Provider } from './stores/createStore';
import * as SplashScreen from 'expo-splash-screen';
import { screens } from './navigation/screens';
import { StackActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

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
      const log = await store.auth.loginCheck();

      await navigationRef.current?.dispatch(
        await StackActions.replace(log ? screens.Tab : screens.Auth),
      );
    }
    SplashScreen.preventAutoHideAsync();
    awaitBootstrap();
    SplashScreen.hideAsync();
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
