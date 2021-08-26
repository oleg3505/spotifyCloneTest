import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen, PlayListScreen } from '../screens';
import { screens } from './screens';

const Stack = createStackNavigator();
export function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={screens.PlayList}
        component={PlayListScreen}
        options={{
          headerTitle: false,
          headerTransparent: true,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
