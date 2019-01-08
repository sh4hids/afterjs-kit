import * as types from './types';

export const login = ({ email, password }) => ({
  type: types.LOGIN,
  meta: {
    async: true,
    blocking: true,
    path: `auth/login`,
    method: 'POST',
    body: { email, password },
  },
});

export const logout = accessToken => {
  return {
    type: types.LOGOUT,
    meta: {
      async: true,
      blocking: true,
      path: `auth/logout`,
      method: 'POST',
      body: {},
      accessToken,
    },
  };
};

export const setLoggedInUser = data => ({
  type: types.SET_LOGGED_IN_USER,
  payload: data,
});

export const initializeAuth = () => ({
  type: types.INITIALIZE,
});

export const setRedirectAfterLogin = () => ({
  type: types.SET_REDIRECT_AFTER_LOGIN,
});
