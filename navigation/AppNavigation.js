import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screens } from './screens';
import { AuthScreen, InitScreen } from '../screens';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={screens.Init}
          component={InitScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name={screens.Auth}
          component={AuthScreen}
          options={{ headerTitleAlign: 'center' }}
        /> */}
        <Stack.Screen
          name={screens.Tab}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
