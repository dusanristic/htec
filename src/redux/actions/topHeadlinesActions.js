import * as actions from './actionTypes';

export function get(params) {
  return {
    type: actions.GET_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: params.language,
          page: 1,
          pageSize: params.perPage
        }
      }
    }
  };
}

export function getMore(params) {
  return {
    type: actions.GET_MORE_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: params.language,
          page: params.pageToFetch,
          pageSize: params.perPage
        }
      }
    }
  };
}
