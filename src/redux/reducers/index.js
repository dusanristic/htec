import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import topHeadlinesReducer from './topHeadlinesReducer';
import headlineCategoriesReducer from './headlineCategoriesReducer';
import searchedHeadlinesReducer from './searchedHeadlinesReducer';
import languagesSelectionReducer from './languagesSelectionReducer';

const topHeadlinesPersistConfig = {
  key: 'TopHeadlines',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error']
};

const headlineCategoriesPersistConfig = {
  key: 'HeadlineCategories',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error']
};

const languagesPersistConfig = {
  key: 'Languages',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  topHeadlines: persistReducer(topHeadlinesPersistConfig, topHeadlinesReducer),
  headlineCategories: persistReducer(headlineCategoriesPersistConfig, headlineCategoriesReducer),
  searchedHeadlines: searchedHeadlinesReducer,
  languages: persistReducer(languagesPersistConfig, languagesSelectionReducer)
});

export default rootReducer;
