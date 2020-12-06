import { actions } from '_redux/actions';
import { Mappers } from '_services';
import initialState from './initialState';

export default function TopHeadlinesReducer(state = initialState.topHeadlines, action) {
  switch (action.type) {
    case actions.GET_TOP_HEADLINES:
      return [];

    case actions.GET_TOP_HEADLINES_SUCCESS: {
      const numberOfArticles = action.payload.data.totalResults;
      const articles = Mappers.mapToTopHeadlines(action.payload.data.articles);

      return {
        data: articles,
        totalResults: numberOfArticles,
        error: null
      };
    }
    case actions.GET_TOP_HEADLINES_FAIL:
      return {
        ...state,
        error: action.error.message
      };

    default:
      return state;
  }
}
