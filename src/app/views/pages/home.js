import React, { Component, Fragment } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import { Title, Text } from '../kits/typography';
import { Button } from '../kits/core';
import { CenteredSingleCol } from '../layouts';
import { authActions } from '../../state/ducks/auth';

class SignUp extends Component {
  static async getInitialProps({ store, req }) {
    //return store.getState();
  }

  render() {
    const {
      errors,
      touched,
      isSubmitting,
      isAuthenticated,
      redirectAfterLogin,
      errorMessage,
    } = this.props;
    return (
      <Fragment>
        {isAuthenticated ? (
          <Redirect to={redirectAfterLogin || '/about'} />
        ) : (
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
              <NavLink to="/todos">About</NavLink>
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
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <Text>{errorMessage}</Text>
                <Button p={16} type="submit" disabled={isSubmitting}>
                  Log in
                </Button>
              </Form>
            </CenteredSingleCol>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const Home = withFormik({
  mapPropsToValues() {
    return {
      email: '',
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
  async handleSubmit(values, { props, setError, resetForm, setSubmitting }) {
    try {
      const { logIn } = props;
      await logIn(values);
      console.log('Hello');
      resetForm();
    } catch (err) {}
    setSubmitting();
  },
})(SignUp);

const mapStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

const mapActionsToProps = {
  setLoggedInUser: authActions.setLoggedInUser,
  logIn: authActions.login,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
