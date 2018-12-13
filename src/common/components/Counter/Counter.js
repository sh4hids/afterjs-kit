import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
} from './counterActions';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

const Counter = ({
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
  counter,
}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <Button onClick={increment}>+</Button>
    {' '}
    <Button onClick={decrement}>-</Button>
    {' '}
    <Button onClick={incrementIfOdd}>Increment if odd</Button>
    {' '}
    <Button onClick={() => incrementAsync()}>Increment async</Button>
  </p>
);




Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default connect(
  (state) => ({
    counter: state.counter,
  }),
  (dispatch) =>
    bindActionCreators(
      { increment, incrementIfOdd, incrementAsync, decrement },
      dispatch,
    ),
)(Counter);
