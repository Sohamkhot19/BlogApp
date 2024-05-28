// index.js
import React from 'react';
import './index.css'
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App'; // Your main App component
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>
);
