import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<App store={ store } />, root);
});
