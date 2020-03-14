
const breedsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BREEDS':
      return [...action.payload];

    default:
      return state;
  }
};

export {
  breedsReducer as default,
};
