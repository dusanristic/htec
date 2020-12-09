import { createStore, applyMiddleware } from 'redux';
import rootReducer from '_redux/reducers';
import { persistStore } from 'redux-persist';
import initialState from '_redux/reducers/initialState';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
// eslint-disable-next-line import/no-unresolved
import { API_KEY } from '@env';

const client = axios.create({
  baseURL: 'https://newsapi.org/v2',
  responseType: 'json'
});

const middlewareConfig = {
  interceptors: {
    request: [
      (_, config) => {
        config.headers.Authorization = `Bearer ${API_KEY}`;
        return config;
      }
    ]
  }
};

const store = createStore(
  rootReducer,
  { ...initialState },
  applyMiddleware(axiosMiddleware(client, middlewareConfig))
);

const persistor = persistStore(store);

// Use this to reset ReduxPersist store
// persistor.purge();

export { store, persistor };
