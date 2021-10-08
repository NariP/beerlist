import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'routes';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles';
import RootTheme from './RootTheme';
import 'antd/dist/antd.css';
import getStore from 'Modules/slices/store';

const store = getStore();
ReactDOM.render(
  <Provider store={store}>
    <RootTheme>
      <GlobalStyle />
      <Routes />
    </RootTheme>
  </Provider>,
  document.getElementById('root'),
);
