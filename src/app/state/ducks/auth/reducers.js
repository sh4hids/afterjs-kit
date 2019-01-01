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
    case types.LOGOUT:
      return { ...state, isAuthenticated: false, user: {} };
    default:
      console.log(type);
      return state;
  }
};

export default authReducers;
