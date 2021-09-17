import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
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
      const isLogged = await store.auth.loginCheck();
      if (isLogged) {
        await store.bootstrap.run();
      }
      navigationRef.current?.dispatch(
        StackActions.replace(isLogged ? screens.Tab : screens.Auth),
      );
      await SplashScreen.hideAsync();
    }
    awaitBootstrap();
  }, []);

  return (
    <DripsyProvider theme={theme}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.3)" />
      <Provider value={store}>
        <AppNavigation ref={navigationRef} />
      </Provider>
    </DripsyProvider>
  );
}
