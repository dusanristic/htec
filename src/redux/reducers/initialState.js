import { categories } from '_data';

const topHeadlinesPerPage = 10;

const headlineCategoriesInitState = () =>
  Object.values(
    categories.reduce((acc, item, index) => {
      acc[item] = {
        header: { title: item, id: index },
        /**
         * Data is two dimensional array because
         * we are showing data in FlatList which is inside SectionList.
         * Both SectionList and FlatList expects an array for representing the data.
         * Due to that, data is represented as matrix.
         */
        data: [[]]
      };

      return acc;
    }, {})
  );

export default {
  topHeadlines: {
    total: null,
    totalFetched: null,
    data: [],
    error: null,
    isFetching: false,
    config: {
      pageToFetch: 1,
      perPage: topHeadlinesPerPage
    }
  },
  headlineCategories: { data: headlineCategoriesInitState(), error: null },
  searchedHeadlines: {
    data: [],
    error: null,
    isFetching: false
  }
};
