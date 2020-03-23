import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import Global from './styles/global';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <Global />
    </Router>
  );
}
