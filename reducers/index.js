import { combineReducers } from 'redux';

import { CHANGE_TEXT } from '../actions/types';

const INITIAL_STATE = {
  one: "",
  two: "",
  three: ""
};

const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state
  }
};

export default combineReducers({
  texts: textReducer
});
