import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Title, Text} from '../kits/typography';


class Counter extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </div>
        <Title>This is the counter page</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit earum aspernatur quisquam perferendis eius modi soluta tempore fuga incidunt, porro, hic explicabo rerum quia alias consequuntur similique ipsam dolores, quo.</Text>
      </Fragment>
    );
  };
}

export default Counter;
