import * as actions from './actionTypes';

export function get(config) {
  return {
    type: actions.GET_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: 'gb',
          page: 1,
          pageSize: config.perPage
        }
      }
    }
  };
}

export function getMore(config) {
  return {
    type: actions.GET_MORE_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: 'gb',
          page: config.pageToFetch,
          pageSize: config.perPage
        }
      }
    }
  };
}
