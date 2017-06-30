import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1>React is running for sure</h1>,
    document.getElementById('app')
  );
});
