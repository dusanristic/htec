/**
 * Property `category` defines param value by which specific category is fetched from backend.
 * Action defined in Redux for fetching specific category must be defined as follow:
 * `GET_${category}_HEADLINES`
 * This way, duplication of code is avoided (check implementation of related reducer).
 */
const BUSINESS = { title: 'BUSINESS', category: 'business' };
const ENTERTAINMENT = { title: 'ENTERTAINMENT', category: 'entertainment' };
const GENERAL = { title: 'GENERAL', category: 'general' };
const HEALTH = { title: 'HEALTH', category: 'health' };
const SCIENCE = { title: 'SCIENCE', category: 'science' };
const SPORTS = { title: 'SPORTS', category: 'sports' };
const TECHNOLOGY = { title: 'TECHNOLOGY', category: 'technology' };

/**
 * The order of categories in array below will define how categories will be
 * sorted in section list on HeadlineCategories screen.
 * To see how order in a array dependes on sort of categories, check configuration of
 * initial state for HeadlineCategories in file initialState.js in Redux folder.
 */
const categories = [ENTERTAINMENT, GENERAL, HEALTH, SCIENCE, SPORTS, TECHNOLOGY, BUSINESS];

export default categories;
