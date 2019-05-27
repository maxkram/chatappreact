import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: 'AIzaSyA6yNdzkOzdIS4ln3RyrSBD1ue9ekMJVyY',
  authDomain: 'chatappreact-88aa0.firebaseapp.com',
  databaseURL: 'https://chatappreact-88aa0.firebaseio.com',
  projectId: 'chatappreact-88aa0',
  storageBucket: 'chatappreact-88aa0.appspot.com',
  messagingSenderId: '534816618408',
  appId: '1:534816618408:web:c4a92369a8756f04'
});
const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent} />
      <Route path='/signup' component={SignupComponent} />
      <Route path='/dashboard' component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
