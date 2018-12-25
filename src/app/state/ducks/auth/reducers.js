import * as types from './types';

const initialState = {
  isAuthenticated: true,
  accessToken: '',
  userId: '5c1e62931ed84858b66c1937',
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
