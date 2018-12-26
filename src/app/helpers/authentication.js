import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function withAuthentication(WrappedComponent) {
  // const WithAuthentication = props => {
  //   if (!props.isAuthenticated) {
  //     return <Redirect to="/" />;
  //   }
  //
  //   return <WrappedComponent {...props} />;
  // };

  class WithAuthentication extends Component {
    static async getInitialProps(ctx) {
      const pageProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...pageProps };
    }

    render() {
      const { isAuthenticated } = this.props;
      return (
        <Fragment>
          {isAuthenticated ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Redirect to="/" />
          )}
        </Fragment>
      );
    }
  }

  const { bool } = PropTypes;
  WithAuthentication.propTypes = {
    isAuthenticated: bool.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  return connect(mapStateToProps)(WithAuthentication);
}
