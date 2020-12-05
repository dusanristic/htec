import * as actions from './actionTypes';

export function load() {
  return {
    type: actions.GET_TOP_HEADLINES,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: 'gb'
        }
      }
    }
  };
}
