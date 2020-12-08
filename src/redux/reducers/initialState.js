import { categories, languages } from '_data';

const topHeadlinesPerPage = 10;
const topCategoryHeadlinesPerPage = 5;

const headlineCategoriesInitState = () =>
  Object.values(
    categories.reduce((acc, item, index) => {
      acc[item.title] = {
        header: { title: item.title, category: item.category, id: index },
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

const languagesInitState = Object.values(languages);

export default {
  languages: {
    selectedLanguage: languagesInitState[0],
    all: languagesInitState
  },
  topHeadlines: {
    total: null,
    totalFetched: null,
    data: [],
    error: null,
    isFetching: false,
    params: {
      pageToFetch: 1,
      perPage: topHeadlinesPerPage,
      language: languagesInitState[0].iso
    }
  },
  headlineCategories: {
    data: headlineCategoriesInitState(),
    error: null,
    categories,
    params: {
      pageToFetch: 1,
      perPage: topCategoryHeadlinesPerPage,
      language: languagesInitState[0].iso
    }
  },
  searchedHeadlines: {
    data: [],
    error: null,
    isFetching: false,
    params: {
      language: languagesInitState[0].iso
    }
  }
};
