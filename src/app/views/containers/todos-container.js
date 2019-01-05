import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../../state/ducks/todos';
import { Todos } from '../pages';

class TodosContainer extends Component {
  static async getInitialProps({ store }) {
    console.log('In initial..');
    const state = store.getState();
    await store.dispatch(
      todoActions.fetchTodoList(state.auth.userId, state.auth.accessToken)
    );
    return store.getState().todos;
  }

  // componentDidMount() {
  //   const { fetchTodoList, userId, accessToken } = this.props;
  //   fetchTodoList({ userId, accessToken });
  // }

  render() {
    return <Todos todos={this.props.todoList} />;
  }
}

const mapStateToProps = ({ auth, todos }) => {
  return {
    userId: auth.user._id,
    accessToken: auth.accessToken,
    todoList: todos.todoList,
    todo: todos.todo,
  };
};

const mapActionsToProps = {
  fetchTodoList: todoActions.fetchTodoList,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodosContainer);
