import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screens } from './screens';
import { AuthScreen, InitScreen } from '../screens';
import TabNavigation from './TabNavigation';
import PlayerWidget from '../components/PlayerWidget';
import { useStore } from '../stores/createStore';
import { observer } from 'mobx-react';

const Stack = createStackNavigator();

function AppNavigation(props, ref) {
  const store = useStore();
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.Init}
          component={InitScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={screens.Auth}
          component={AuthScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name={screens.Tab}
          component={TabNavigation}
          options={{ animationEnabled: false, headerShown: false }}
        />
      </Stack.Navigator>
      {store.player.isPlaying ? <PlayerWidget /> : null}
    </NavigationContainer>
  );
}

export default observer(React.forwardRef(AppNavigation));
