/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import './style/index.css';
import App from './containers/App';
import configureStore from './store/configureStore';
import spinner from './style/icons/spinner.gif';
import trashbox from './style/icons/trashbox.svg';

// prefetch assets
new Image().src = spinner;
new Image().src = trashbox;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
