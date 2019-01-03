import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { todoActions } from '../../state/ducks/todos';
import Todos from './todos';

class About extends Component {
  static async getInitialProps({ store }) {
    const state = store.getState();
    await store.dispatch(todoActions.fetchTodoList(state.auth.user._id));
    return store.getState().todos;
  }

  render() {
    const { todoList } = this.props;
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
