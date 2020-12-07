import { actions } from '_redux/actions';
import { Mappers } from '_services';
import initialState from './initialState';

export default function TopHeadlinesReducer(state = initialState.topHeadlines, action) {
  switch (action.type) {
    case actions.GET_TOP_HEADLINES:
    case actions.GET_MORE_TOP_HEADLINES:
      return { ...state, isFetching: true };

    case actions.GET_TOP_HEADLINES_SUCCESS: {
      const totalNumberOfArticles = action.payload.data.totalResults;
      const articles = Mappers.mapToTopHeadlines(action.payload.data.articles);
      const totalFetched = state.params.perPage;
      return {
        data: articles,
        total: totalNumberOfArticles,
        totalFetched,
        error: null,
        isFetching: false,
        params: { ...state.params, pageToFetch: 2 }
      };
    }

    case actions.GET_MORE_TOP_HEADLINES_SUCCESS: {
      const totalNumberOfArticles = action.payload.data.totalResults;
      const articles = Mappers.mapToTopHeadlines(action.payload.data.articles);
      const currentPage = state.params.pageToFetch;
      const totalFetched = state.totalFetched + state.params.perPage;
      const data = [...state.data, ...articles];

      return {
        data,
        total: totalNumberOfArticles,
        totalFetched,
        error: null,
        isFetching: false,
        params: { ...state.params, pageToFetch: currentPage + 1 }
      };
    }

    case actions.SELECT_LANGUAGE: {
      const { language } = action;
      return { ...state, params: { ...state.params, language: language.iso } };
    }

    case actions.GET_TOP_HEADLINES_FAIL:
    case actions.GET_MORE_TOP_HEADLINES_FAIL:
      return {
        ...state,
        error: action.error.message,
        isFetching: false
      };

    default:
      return state;
  }
}
