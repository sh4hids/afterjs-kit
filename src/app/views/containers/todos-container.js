import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoActions } from '../../state/ducks/todos';
import { Todos } from '../pages';

class TodosContainer extends Component {
  static async getInitialProps({ store }) {
    console.log('In initial mount...');
    const state = store.getState();
    await store.dispatch(todoActions.fetchTodoList(state.auth.userId));
    console.log(store.getState().todos);
    return store.getState().todos;
  }

  componentDidMount() {
    console.log('In did mount...');
    const { fetchTodoList, userId } = this.props;
    fetchTodoList(userId);
  }

  render() {
    console.log(this.props.todoList);
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
