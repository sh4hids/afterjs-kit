import * as types from './types';

const initialState = {};

const todosReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TASK:
      return state;
    default:
      return state;
  }
};

export default todosReducers;
