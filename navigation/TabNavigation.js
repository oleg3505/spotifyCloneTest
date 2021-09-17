import { Text, View } from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { screens } from './screens';
import {
  Fontisto,
  Ionicons,
  FontAwesome5,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { HomeScreen, ProfileScreen, SearchScreen } from '../screens';

import { LinearGradient } from 'expo-linear-gradient';
import { TabGradient } from '../components/TabGradient';
import { HomeStackNavigation } from './HomeStackNavigition';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <TabGradient {...props} />;
      }}
      backBehavior="initialRoute"
      tabBarOptions={{
        keyboardHidesTabBar: true,

        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#B2B2B2',
      }}
    >
      <Tab.Screen
        name={screens.Home}
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Fontisto name="home" size={24} color={color} />
            ) : (
              <SimpleLineIcons name="home" size={24} color={color} />
            ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={screens.Search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="md-search" size={24} color={color} />
            ) : (
              <Ionicons name="ios-search-outline" size={24} color={color} />
            ),
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ) : (
              <FontAwesome5 name="user" size={24} color={color} />
            ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
