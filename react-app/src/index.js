import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar.js';
import Main from './Main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
  </React.StrictMode>
);

