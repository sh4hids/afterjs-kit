import * as types from './types';

const initialState = {
  todo: {},
  todoList: [],
};

const todosReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TASK:
      return {
        ...state,
        todo: payload,
        todoList: [...state.todoList, payload],
      };
    case types.GET_ALL_TASKS_COMPLETED:
      return {
        ...state,
        todoList: [...payload],
      };
    default:
      return state;
  }
};

export default todosReducers;
