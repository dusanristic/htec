import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppScreens } from '_screens';
import i18n from 'i18n-js';

import Routes from './Routes';

const Tab = createBottomTabNavigator();

function AppNavigatorTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.TopHeadlines}
        component={AppScreens.TopHeadlines}
        options={{
          title: i18n.translate('topHeadlines')
        }}
      />
      <Tab.Screen
        name={Routes.HeadlineCategories}
        component={AppScreens.HeadlineCategories}
        options={{
          title: i18n.translate('headlineCategories')
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigatorTabBar;
