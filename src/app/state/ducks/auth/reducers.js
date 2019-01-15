import * as types from './types';

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {},
  errorMessage: '',
  redirectAfterLogin: '/home',
  redirectAfterLogout: '/',
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        accessToken: payload.token,
      };
    case types.LOGIN_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        accessToken: payload.token,
        redirectAfterLogin: '/about',
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: payload.message,
      };
    case types.LOGOUT_COMPLETED || types.LOGOUT_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        accessToken: '',
        redirectAfterLogout: '/',
      };
    default:
      return state;
  }
};

export default authReducers;
