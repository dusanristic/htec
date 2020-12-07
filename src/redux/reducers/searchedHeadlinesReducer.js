import { actions } from '_redux/actions';
import { Mappers } from '_services';
import initialState from './initialState';

export default function SearchedHeadlinesReducer(state = initialState.searchedHeadlines, action) {
  switch (action.type) {
    case actions.SEARCH_TOP_HEADLINES:
      return { ...state, isFetching: true };
    case actions.SEARCH_TOP_HEADLINES_SUCCESS: {
      const articles = Mappers.mapToTopHeadlines(action.payload.data.articles);
      return { ...state, data: articles, isFetching: false, error: null };
    }
    case actions.SEARCH_TOP_HEADLINES_FAIL:
      return state;

    default:
      return state;
  }
}
