import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {
  static async getInitialProps({ req, res, match }) {
    console.log('Hello');
  }

  render() {
    return (
      <Fragment>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <h1>This is the about page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          earum aspernatur quisquam perferendis eius modi soluta tempore fuga
          incidunt, porro, hic explicabo rerum quia alias consequuntur similique
          ipsam dolores, quo.
        </p>
      </Fragment>
    );
  }
}

export default About;
