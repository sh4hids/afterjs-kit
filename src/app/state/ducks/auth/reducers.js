import * as types from './types';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {},
  redirectAfterLogin: '/todos',
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_COMPLETED:
      console.log(payload);
      return { ...state, isAuthenticated: true, ...payload };
    case types.LOGIN_FAILED:
      console.log(payload);
      return { ...state, isAuthenticated: false };
    case types.LOGOUT:
      return { ...state, isAuthenticated: false, user: {} };
    default:
      return state;
  }
};

export default authReducers;
