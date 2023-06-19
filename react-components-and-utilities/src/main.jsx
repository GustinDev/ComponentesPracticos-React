import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
//React Router Dom
import { BrowserRouter } from 'react-router-dom';
//Auth0
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId='nfWXsFPyYVCx3AmhgCb784ozLrRDfquJ'
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
