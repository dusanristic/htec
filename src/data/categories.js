/**
 * Constants below have multiple purposes:
 * 1. Title of section headers on HeadlineCategories screen,
 * 2. They are used as params for specifying by what category we want to fetch headlines,
 * 3. Defining action type for Redux.
 * Even though it may seem like this is not in the frames of the clean code, all things above
 * are tightly coupled, and it will greatly remove duplication of code.
 * Titles can be easily changed (check file initialState.js in Redux folder),
 * and there is no need to name actions different than category params.
 * Due to all reasons from above, we did implementation in this way.
 */
const BUSINESS = 'BUSINESS';
const ENTERTAINMENT = 'ENTERTAINMENT';
const GENERAL = 'GENERAL';
const HEALTH = 'HEALTH';
const SCIENCE = 'SCIENCE';
const SPORTS = 'SPORTS';
const TECHNOLOGY = 'TECHNOLOGY';

/**
 * The order of categories in array below will define how categories will be
 * sorted in section list on HeadlineCategories screen.
 * To see how order in a array dependes on sort of categories, check configuration of
 * initial state for HeadlineCategories in file initialState.js in Redux folder.
 */
const categories = [ENTERTAINMENT, GENERAL, HEALTH, SCIENCE, SPORTS, TECHNOLOGY, BUSINESS];

export default categories;
