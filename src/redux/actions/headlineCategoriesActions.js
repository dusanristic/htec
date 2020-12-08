export function load(category, params) {
  return {
    type: `GET_${category.toUpperCase()}_HEADLINES`,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: params.language,
          pageSize: params.perPare,
          category
        }
      }
    }
  };
}
