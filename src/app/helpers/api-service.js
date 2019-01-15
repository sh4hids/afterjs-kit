import { fetch } from '../utils';
import config from '../config';
import AuthService from './auth-service';

const Auth = new AuthService();

const env = process.env.NODE_ENV || 'development';
const baseUrl = `${config[env].server}`;

const apiService = () => next => action => {
  const result = next(action);
  if (!action.meta || !action.meta.async) {
    return result;
  }

  const { path, method = 'GET', body, accessToken } = action.meta;
  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`);
  }

  const url = `${baseUrl}${path}`;

  return fetch(url, method, body, accessToken).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  );
};

export default apiService;

function handleErrors(err, action, next) {
  if (action.type === 'auth/logout') {
    Auth.removeToken();
  }
  next({
    type: `${action.type}_failed`,
    payload: err,
    meta: action.meta,
  });

  return Promise.reject(err);
}

function handleResponse(res, action, next) {
  if (action.type === 'auth/login') {
    const { user, token } = res.data;
    Auth.setToken(token);
    Auth.setUser(user);
  } else if (action.type === 'auth/logout') {
    Auth.removeToken();
  }
  next({
    type: `${action.type}_completed`,
    payload: res.data,
    meta: action.meta,
  });

  return res;
}
