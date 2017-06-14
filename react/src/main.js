import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1>Render some components here</h1>,
    document.getElementById('app')
  );
});
