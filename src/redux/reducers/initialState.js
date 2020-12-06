import { categories } from '_data';

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
    totalResults: null,
    data: [],
    error: null
  },
  headlineCategories: { data: headlineCategoriesInitState(), error: null }
};
