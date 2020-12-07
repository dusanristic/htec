import { actions } from '_redux/actions';
import initialState from './initialState';

export default function LanguagesSelectionReducer(state = initialState.languages, action) {
  switch (action.type) {
    case actions.SELECT_LANGUAGE:
      return { ...state, selectedLanguage: action.language };
    default:
      return state;
  }
}
