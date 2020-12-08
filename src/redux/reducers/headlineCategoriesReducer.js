import { actions } from '_redux/actions';
import { Mappers } from '_services';
import initialState from './initialState';

export default function HeadlineCategoriesReducer(state = initialState.headlineCategories, action) {
  switch (action.type) {
    case actions.GET_BUSINESS_HEADLINES:
    case actions.GET_ENTERTAINMENT_HEADLINES:
    case actions.GET_GENERAL_HEADLINES:
    case actions.GET_HEALTH_HEADLINES:
    case actions.GET_SCIENCE_HEADLINES:
    case actions.GET_SPORTS_HEADLINES:
    case actions.GET_TECHNOLOGY_HEADLINES:
      return state;

    case actions.GET_BUSINESS_HEADLINES_SUCCESS:
    case actions.GET_ENTERTAINMENT_HEADLINES_SUCCESS:
    case actions.GET_GENERAL_HEADLINES_SUCCESS:
    case actions.GET_HEALTH_HEADLINES_SUCCESS:
    case actions.GET_SCIENCE_HEADLINES_SUCCESS:
    case actions.GET_SPORTS_HEADLINES_SUCCESS:
    case actions.GET_TECHNOLOGY_HEADLINES_SUCCESS: {
      const actionType = action.payload.config.reduxSourceAction.type;
      const sectionAction = actionType.split('_')[1];
      const articles = Mappers.mapToTopHeadlines(action.payload.data.articles);

      const updatedData = state.data.map((item) => {
        if (item.header.category.toUpperCase() === sectionAction) {
          return { ...item, data: [articles] };
        }

        return item;
      });

      return { ...state, data: updatedData, error: null };
    }

    case actions.GET_BUSINESS_HEADLINES_FAIL:
    case actions.GET_ENTERTAINMENT_HEADLINES_FAIL:
    case actions.GET_GENERAL_HEADLINES_FAIL:
    case actions.GET_HEALTH_HEADLINES_FAIL:
    case actions.GET_SCIENCE_HEADLINES_FAIL:
    case actions.GET_SPORTS_HEADLINES_FAIL:
    case actions.GET_TECHNOLOGY_HEADLINES_FAIL:
      return {
        ...state,
        error: action.error.message
      };

    case actions.SELECT_LANGUAGE: {
      const { language } = action;
      return { ...state, params: { ...state.params, language: language.iso } };
    }

    default:
      return state;
  }
}
