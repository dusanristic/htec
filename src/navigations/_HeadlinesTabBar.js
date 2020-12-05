import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreens } from '_screens';
import Routes from './Routes';

const Tab = createBottomTabNavigator();

function AppNavigatorTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.Headlines}
        component={AppScreens.Headlines}
        options={{
          title: 'Top Headlines',
        }}
      />
      <Tab.Screen
        name={Routes.HeadlineCategories}
        component={AppScreens.HeadlineCategories}
        options={{
          title: 'Categories',
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigatorTabBar;
