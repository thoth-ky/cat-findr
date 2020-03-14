
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'STORE_SEARCH_IMAGE_RESULTS':
      return [...action.payload];

    default:
      return state;
  }
};

export {
  searchReducer as default,
};
