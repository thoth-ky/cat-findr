import { getFromApi } from '../../../utils/api';

const getFavCatAction = (dispatch, favID, params = {}) => {
  const actionData = {
    type: 'ADD_FAV_CATS',
  };
  getFromApi(`/images/${favID}`, dispatch, actionData, params);
};

export {
  getFavCatAction,
};
