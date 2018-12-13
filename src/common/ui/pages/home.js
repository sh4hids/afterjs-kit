import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {Title, Text} from '../kits/typography';
import {Button} from '../kits/core';

class Home extends Component {
  render() {
    return (<Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content="SSR React application" />
        <title>Welcome To After.js</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/counter">Counter</NavLink>
      </div>
      <Title>This is the home page</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit earum aspernatur quisquam perferendis eius modi soluta tempore fuga incidunt, porro, hic explicabo rerum quia alias consequuntur similique ipsam dolores, quo.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit earum aspernatur quisquam perferendis eius modi soluta tempore fuga incidunt, porro, hic explicabo rerum quia alias consequuntur similique ipsam dolores, quo.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit earum aspernatur quisquam perferendis eius modi soluta tempore fuga incidunt, porro, hic explicabo rerum quia alias consequuntur similique ipsam dolores, quo.</Text>
      <Button p={16}>Click</Button>
    </Fragment>);
  };
}

export default Home;
