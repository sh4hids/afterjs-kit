import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { stuff: 'more stuffs' };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <h1>About</h1>
        {this.props.stuff ? this.props.stuff : 'Loading...'}
      </div>    )
  }
}

export default About;
