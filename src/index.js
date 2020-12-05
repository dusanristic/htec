import React from 'react';
import { AppNavigator } from './navigations';
import { useLocalization } from './services/Localization';

const App = () => {
  const { localizationLoaded } = useLocalization();

  if (!localizationLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
