import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './pages/routes';
import store from './redux/store';
import { Provider } from 'react-redux';
import './styles.css'


ReactDOM.render(
  <Provider store={store}>
        <Routes/>
  </Provider>,
  document.getElementById('root')
);
