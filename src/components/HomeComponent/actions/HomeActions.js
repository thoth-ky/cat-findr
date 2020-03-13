import { getFromApi } from '../../../utils/api';

const getRandomCatsAction = (dispatch, params = {}) => {
  const actionData = {
    type: 'ADD_NEW_CATS',
  };
  getFromApi('/images/search', dispatch, actionData, params);
};

export {
  getRandomCatsAction,
};
