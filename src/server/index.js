import qs from 'qs';
import React from 'react';
import express from 'express';
import { render } from '@jaredpalmer/after';
import { renderToString } from 'react-dom/server';
import { Home } from '../app/views/pages';
import { AuthService } from '../app/helpers';
import routes from '../app/routes';
import MyDocument from './Document';
import { Provider } from 'react-redux';
import configureStore from '../app/state/store';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const Auth = new AuthService();

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query);

      // Compile initial state
      let store;
      if (Auth.loggedIn(req)) {
        const accessToken = Auth.getToken(req);
        const user = Auth.getUser(req);
        const preloadedState = {
          auth: { accessToken, user, isAuthenticated: true },
        };
        store = configureStore(preloadedState);
      } else {
        const preloadedState = {};
        store = configureStore(preloadedState);
      }

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
        store: store,
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
