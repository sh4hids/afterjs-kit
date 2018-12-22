import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Title, Text } from '../kits/typography';
import { Button } from '../kits/core';
import { CenteredSingleCol } from '../layouts';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

class SignUp extends Component {
  render() {
    const { errors, touched } = this.props;
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
          <Form>
            <div>
              {touched.email && errors.email && <Text>{errors.email}</Text>}
              <Field type="email" name="email" placeholder="Email" />
            </div>
            <br />
            <div>
              {touched.password && errors.password && (
                <Text>{errors.password}</Text>
              )}
              <Field type="password" name="password" placeholder="Password" />
            </div>
            <br />
            <Button p={16} type="submit">
              Log in
            </Button>
          </Form>
        </CenteredSingleCol>
      </Fragment>
    );
  }
}

const Home = withFormik({
  mapPropsToValues() {
    return {
      email: 'test text',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(SignUp);

export default Home;
