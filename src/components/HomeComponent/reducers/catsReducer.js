
const catsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_CATS':
      return {
        ...state,
        data: action.payload
      };
      
    default:
      return state;
  }
}

export {
  catsReducer,
};