import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '_redux/store/index';
import { AppNavigator } from './navigations';
import { useLocalization } from './services/localization';

const App = () => {
  const { localizationLoaded } = useLocalization();

  if (!localizationLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
