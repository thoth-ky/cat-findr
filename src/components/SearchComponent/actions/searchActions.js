import { getFromApi } from '../../../utils/api';

function getBreedsAction(dispatch) {
  const actionData = {
    type: 'ADD_BREEDS',
  };
  getFromApi('/breeds', dispatch, actionData);
}

function getCategories(dispatch) {
  const actionData = {
    type: 'ADD_CATEGORIES',
  };
  getFromApi('/categories', dispatch, actionData);
}

function searchImages(dispatch, params = {}) {
  const actionData = {
    type: 'STORE_SEARCH_IMAGE_RESULTS',
  };
  getFromApi('/images', dispatch, actionData, params);
}

export {
  getBreedsAction,
  getCategories,
  searchImages,
};
