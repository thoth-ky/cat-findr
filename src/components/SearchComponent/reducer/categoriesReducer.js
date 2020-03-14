
const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return [...action.payload];

    default:
      return state;
  }
};

export {
  categoriesReducer as default,
};
