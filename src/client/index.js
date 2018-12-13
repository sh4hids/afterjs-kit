import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { ensureReady, After } from '@jaredpalmer/after';
import theme from '../common/theme'
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';


const store = configureStore(window.__PRELOADED_STATE__);


ensureReady(routes).then(data =>
  hydrate(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <After data={data} routes={routes} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
