import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { reducers } from './reducers/index.js'
import { Auth0Provider } from '@auth0/auth0-react';

const domain: any= process.env.REACT_APP_AUTH0_DOMAIN;
const clientId: any= process.env.REACT_APP_AUTH0_CLIENT_ID;
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
      <App />      
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
