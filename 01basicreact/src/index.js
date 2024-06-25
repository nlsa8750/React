import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// html ka access mil gaya 
const root = ReactDOM.createRoot(document.getElementById('root'));

// data ko render(fetch karke display) karana cha rahe hai
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

