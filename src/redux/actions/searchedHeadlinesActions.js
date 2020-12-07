import * as actions from './actionTypes';

/**
 * Search should return all top headlines filtered by specific keyword.
 * As there are no endpoint for fetching all topheadlines, we are mimicing
 * that by fetching maximum allowed articles per one page, which is 100.
 */
export function search(text) {
  return {
    type: actions.SEARCH_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: 'gb',
          page: 1,
          pageSize: 100,
          q: text
        }
      }
    }
  };
}
