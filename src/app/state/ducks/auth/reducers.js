import * as types from './types';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {},
  errorMessage: '',
  redirectAfterLogin: '/todos',
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_COMPLETED:
      return { ...state, isAuthenticated: true, ...payload };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: payload.message,
      };
    case types.LOGOUT:
      return { ...state, isAuthenticated: false, user: {} };
    default:
      return state;
  }
};

export default authReducers;
