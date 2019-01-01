import * as types from './types';
import config from '../../../config';

const env = process.env.NODE_ENV || 'development';
const apiUrl = config[env].api;

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

export const logout = () => ({
  type: types.LOGOUT,
});

export const initializeAuth = () => ({
  type: types.INITIALIZE,
});

export const setRedirectAfterLogin = () => ({
  type: types.SET_REDIRECT_AFTER_LOGIN,
});
