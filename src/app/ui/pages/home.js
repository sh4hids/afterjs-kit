import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Title, Text } from '../kits/typography';
import { Button } from '../kits/core';
import { CenteredSingleCol } from '../layouts';
import { withFormik } from 'formik';
import Yup from 'yup';

class SignUp extends Component {
  render() {
    const { values, handleChange } = this.props;
    console.log(values);
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="SSR React application" />
          <title>Welcome To After.js</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <CenteredSingleCol width={960}>
          <Title>Welcome to afterjs todo app</Title>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br />
            <br />
            <Button p={16} type="submit">
              Log in
            </Button>
          </form>
        </CenteredSingleCol>
      </Fragment>
    );
  }
}

const Home = withFormik({
  mapPropsToValues() {
    return {
      email: 'test text',
    };
  },
})(SignUp);

export default Home;
