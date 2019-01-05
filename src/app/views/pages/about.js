import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { todoActions } from '../../state/ducks/todos';
import Todos from './todos';
import { AuthService } from '../../helpers';

const Auth = new AuthService();

class About extends Component {
  static async getInitialProps({ store, req }) {
    const state = store.getState();
    console.log(state);
    if (Auth.loggedIn(req)) {
      const token = Auth.getToken(req);
      const user = Auth.getUser(req);

      await store.dispatch(
        todoActions.fetchTodoList({ userId: user._id, accessToken: token })
      );
      return store.getState().todos;
    }

    // await store.dispatch(
    //   todoActions.fetchTodoList(auth.user._id, auth.accessToken)
    // );
    return store.getState().todos;
  }

  render() {
    const { todoList } = this.props;
    console.log(todoList);
    return (
      <Fragment>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/todos">About</NavLink>
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

export default About;
