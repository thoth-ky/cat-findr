
const catsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_CATS':
      return [...action.payload]
      
      
    default:
      return state;
  }
}

export {
  catsReducer,
};