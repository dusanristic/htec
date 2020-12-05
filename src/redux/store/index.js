import { createStore, applyMiddleware } from 'redux';
import rootReducer from '_redux/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initialState from '_redux/reducers/initialState';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'https://newsapi.org/v2',
  responseType: 'json'
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
  //   whitelist: ['TopHeadlines']
};

const middlewareConfig = {
  interceptors: {
    request: [
      (getState, config) => {
        config.headers.Authorization = 'Bearer 1fbe9d7145da4081bd77da88ca46178e';
        return config;
      }
    ]
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  { ...initialState },
  applyMiddleware(axiosMiddleware(client, middlewareConfig))
);

const persistor = persistStore(store);

// Use this to reset ReduxPersist store
// persistor.purge();

export { store, persistor };
