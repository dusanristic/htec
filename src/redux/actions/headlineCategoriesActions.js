const articlesPerPage = 5;

export function load(category) {
  return {
    type: `GET_${category.toUpperCase()}_HEADLINES`,
    payload: {
      request: {
        url: '/top-headlines',
        method: 'GET',
        params: {
          country: 'gb',
          pageSize: articlesPerPage,
          category: category.toLowerCase()
        }
      }
    }
  };
}
