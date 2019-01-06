import * as types from './types';
import config from '../../../config';

const env = process.env.NODE_ENV || 'development';
const apiUrl = config[env].api;

export const fetchTodoById = permalink => ({
  type: types.GET_TASK_BY_ID,
  meta: {
    async: true,
    blocking: true,
    path: `${apiUrl}/todos/${permalink}`,
    method: 'GET',
  },
});

export const fetchTodoList = ({ userId, accessToken }) => {
  return {
    type: types.GET_ALL_TASKS,
    meta: {
      async: true,
      blocking: true,
      path: `${apiUrl}/users/${userId}/todos`,
      method: 'GET',
      accessToken,
    },
  };
};
