import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../../state/ducks/todos';
import { Todos } from '../pages';

class TodosContainer extends Component {
  static async getInitialProps({ req, res, match }) {
    console.log('Hello');
    // const { fetchTodoList, userId } = this.props;
    // fetchTodoList(userId);
  }

  render() {
    return <Todos todos={this.props.todoList} />;
  }
}

const mapStateToProps = ({ auth, todos }) => {
  return {
    userId: auth.userId,
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
