import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import topHeadlinesReducer from './topHeadlinesReducer';
import headlineCategoriesReducer from './headlineCategoriesReducer';

const topHeadlinesPersistConfig = {
  key: 'TopHeadlines',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['error']
};

// const headlineCategoriesPersistConfig = {
//   key: 'HeadlineCategories',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2,
//   blacklist: ['error']
// };

const rootReducer = combineReducers({
  topHeadlines: persistReducer(topHeadlinesPersistConfig, topHeadlinesReducer),
  headlineCategories: headlineCategoriesReducer
});

export default rootReducer;
