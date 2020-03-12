import React, {createContext, useContext, useReducer} from 'react';
import { mainReducer } from './mainReducer';
import { initialState } from './initialState';

const StateContext = createContext();

const StateProvider = ({ children }) =>(
  <StateContext.Provider value={useReducer(mainReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// returns [state, dispatch]
const useStore = () => useContext(StateContext);

export {
  StateContext,
  StateProvider,
  useStore,
}