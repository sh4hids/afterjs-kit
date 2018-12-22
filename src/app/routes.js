import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import { withAuthentication } from './helpers';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/pages/home'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/pages/about'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
  {
    path: '/todos',
    exact: true,
    component: withAuthentication(
      asyncComponent({
        loader: () => import('./views/containers/todos-container'), // required
        Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
      })
    ),
  },
];
