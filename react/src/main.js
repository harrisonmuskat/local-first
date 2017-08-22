import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AltContainer } from 'alt-container';
import App from './components/App';
import AppStore from './flux/stores/AppStore';

$(() => {
  const applicationRoot = document.getElementById('app');
  // eslint-disable-line jsx-filename-extension
  ReactDOM.render(<App/>, applicationRoot);
});
