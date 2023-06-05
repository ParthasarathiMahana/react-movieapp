import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import movie from './reducers';


const store = configureStore({ reducer:movie});
console.log(store.getState());
store.dispatch({type: 'ADD_MOVIES', movies: [{name: 'Superman'}]});
console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
