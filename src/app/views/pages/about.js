import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { todoActions } from '../../state/ducks/todos';
import { authActions } from '../../state/ducks/auth';
import Todos from './todos';

class About extends Component {
  static async getInitialProps({ store, req }) {
    const { auth } = store.getState();
    await store.dispatch(
      todoActions.fetchTodoList({
        userId: auth.user._id,
        accessToken: auth.accessToken,
      })
    );
    return store.getState().todos;
  }

  componentDidMount() {
    const { accessToken, user, fetchTodoList } = this.props;
    fetchTodoList({ accessToken, userId: user._id });
  }

  handleLogout = async () => {
    const { logOut, accessToken } = this.props;
    await logOut(accessToken);
  };

  render() {
    const { todoList } = this.props;
    return (
      <Fragment>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/todos">About</NavLink>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        <h1>This is the about page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          earum aspernatur quisquam perferendis eius modi soluta tempore fuga
          incidunt, porro, hic explicabo rerum quia alias consequuntur similique
          ipsam dolores, quo.
        </p>
        {todoList && <Todos todos={todoList} />}
      </Fragment>
    );
  }
}

const mapStatesToProps = ({ auth, todos }) => {
  return {
    ...auth,
    ...todos,
  };
};

const mapActionsToProps = {
  fetchTodoList: todoActions.fetchTodoList,
  logOut: authActions.logout,
};

export default connect(
  mapStatesToProps,
  mapActionsToProps
)(About);
