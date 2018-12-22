import React, { Fragment } from 'react';

const Todos = ({ todos }) => {
  return (
    <Fragment>
      {todos.map(todo => (
        <p key={todo._id}>{todo.title}</p>
      ))}
    </Fragment>
  );
};

export default Todos;
