import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { screens } from './screens';

import { HomeScreen, ProfileScreen, SearchScreen } from '../screens';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={screens.Home}
        component={HomeScreen}
        options={{ tabBarLabel: () => <Text>Home</Text> }}
      />
      <Tab.Screen
        name={screens.Search}
        component={SearchScreen}
        options={{ tabBarLabel: () => <Text>Search</Text> }}
      />
      <Tab.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{ tabBarLabel: () => <Text>Profile</Text> }}
      />
    </Tab.Navigator>
  );
}
