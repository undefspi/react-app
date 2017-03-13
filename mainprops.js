import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppProps.jsx';

ReactDOM.render(
  <App headerProp="Header from props...." contentProp="Content from props..."/>,
  document.getElementById('app')
);
