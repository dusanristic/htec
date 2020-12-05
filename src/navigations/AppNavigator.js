import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppScreens } from '_screens';

import HeadlinesTabBar from './_HeadlinesTabBar';
import Routes from './Routes';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.HeadlinesTabBar}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name={Routes.HeadlinesTabBar} component={HeadlinesTabBar} />
        <Stack.Screen name={Routes.HeadlineContent} component={AppScreens.HeadlineContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
