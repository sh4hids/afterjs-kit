import qs from 'qs';
import React from 'react';
import express from 'express';
import { render } from '@jaredpalmer/after';
import { renderToString } from 'react-dom/server';
import Home from '../common/views/pages/home/Home';
import routes from '../common/routes';
import MyDocument from './Document';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {

    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || 0;

    // Compile initial state
    const preloadedState = { counter };

    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    // Grab the initial state from our Redux store
    const serverState = store.getState();


    const customRenderer = node => {
      const Home = <Provider store={store}>{node}</Provider>;
      return {
        html: renderToString(Home),
        // Anything else you add here will be made available
        // within document's this.props
        // e.g a redux store...
        serverState,
      };
    };
 
      
      const html = await render({
        req,
        res,
        routes,
        assets,
        document: MyDocument,
        customRenderer,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
