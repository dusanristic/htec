import { combineReducers } from 'redux';
import TopHeadlines from './topHeadlinesReducer';
import HeadlineCategories from './headlineCategoriesReducer';

const rootReducer = combineReducers({
  TopHeadlines,
  HeadlineCategories
});

export default rootReducer;
