import * as types from './types';

const initialState = {
  isAuthenticated: true,
  redirectAfterLogin: '/',
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN:
      return { ...state, isAuthenticated: true };
    case types.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducers;
