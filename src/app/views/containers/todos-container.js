import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoActions } from '../../state/ducks/todos';
import { Todos } from '../pages';

class TodosContainer extends Component {
  componentDidMount() {
    const { fetchTodoList, userId } = this.props;
    fetchTodoList(userId);
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
