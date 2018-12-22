import * as types from './types';

export const fetchTodoById = permalink => ({
  type: types.GET_TASK_BY_ID,
  meta: {
    async: true,
    blocking: true,
    path: `todos/${permalink}`,
    method: 'GET',
  },
});

export const fetchTodoList = userId => ({
  type: types.GET_ALL_TASKS,
  meta: {
    async: true,
    blocking: true,
    path: `users/${userId}/todos`,
    method: 'GET',
  },
});
