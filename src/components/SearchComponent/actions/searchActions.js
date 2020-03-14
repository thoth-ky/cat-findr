import { getFromApi } from '../../../utils/api';

function getBreedsAction(dispatch) {
  const actionData = {
    type: 'ADD_BREEDS',
  };
  getFromApi('/breeds', dispatch, actionData);
}

function getCategoriesAction(dispatch) {
  const actionData = {
    type: 'ADD_CATEGORIES',
  };
  getFromApi('/categories', dispatch, actionData);
}

function searchImagesAction(dispatch, params = {}) {
  const actionData = {
    type: 'STORE_SEARCH_IMAGE_RESULTS',
  };
  getFromApi('/images/search', dispatch, actionData, params);
}

export {
  getBreedsAction,
  getCategoriesAction,
  searchImagesAction,
};
