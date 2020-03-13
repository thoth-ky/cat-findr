import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { mainReducer } from './mainReducer';
import { initialState } from './initialState';


const StateContext = createContext();

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(mainReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// returns [state, dispatch]
const useStore = () => useContext(StateContext);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  StateContext,
  StateProvider,
  useStore,
};
