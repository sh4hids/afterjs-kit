import * as types from './types';

const initialState = {
  isAuthenticated: true,
  accessToken: '',
  userId: '5c07a44e1ec68b10b771b7c5',
  redirectAfterLogin: '/todos',
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
