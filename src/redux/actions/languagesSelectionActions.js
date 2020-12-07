import * as actions from './actionTypes';

export function select(language) {
  return { type: actions.SELECT_LANGUAGE, language };
}
