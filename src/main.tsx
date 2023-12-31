import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';

// firebase.initializeApp(firebaseConfig);


const container = document.getElementById('root') as HTMLElement;
const Root = ReactDOM.createRoot(container);

Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
