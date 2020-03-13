
const favCatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV_CATS':
      return { ...action.payload };

    default:
      return state;
  }
};

export {
  favCatReducer,
};
