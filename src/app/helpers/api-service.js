import { fetch } from '../utils';
import config from '../config';

const env = process.env.NODE_ENV || 'development';

const baseUrl = `${config[env].server}${config[env].api}`;

const apiService = () => next => action => {
  const result = next(action);
  if (!action.meta || !action.meta.async) {
    return result;
  }

  const { path, method = 'GET', body } = action.meta;

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`);
  }

  const url = `${baseUrl}${path}`;

  return fetch(url, method, body).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  );
};

export default apiService;

function handleErrors(err, action, next) {
  next({
    type: `${action.type}_failed`,
    payload: err,
    meta: action.meta,
  });

  return Promise.reject(err);
}

function handleResponse(res, action, next) {
  next({
    type: `${action.type}_completed`,
    payload: res.data,
    meta: action.meta,
  });

  return res;
}
