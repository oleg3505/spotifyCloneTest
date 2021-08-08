import { Text, View } from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { screens } from './screens';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { HomeScreen, ProfileScreen, SearchScreen } from '../screens';

import { LinearGradient } from 'expo-linear-gradient';
import { TabGradient } from '../components/TabGradient';

const Tab = createBottomTabNavigator();
const theme = {
  active: '#FFFFFF',
  inactive: '#B2B2B2',
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <TabGradient {...props} />;
      }}
      theme={theme}
      backBehavior="initialRoute"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={screens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="home" size={24} color={theme.active} />
            ) : (
              <SimpleLineIcons name="home" size={24} color={theme.inactive} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                focused ? { color: theme.active } : { color: theme.inactive },
              ]}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={screens.Search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-search" size={24} color={theme.active} />
            ) : (
              <Ionicons
                name="ios-search-outline"
                size={24}
                color={theme.inactive}
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                focused ? { color: theme.active } : { color: theme.inactive },
              ]}
            >
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color={theme.active} />
            ) : (
              <FontAwesome5 name="user" size={24} color={theme.inactive} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                focused ? { color: theme.active } : { color: theme.inactive },
              ]}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
