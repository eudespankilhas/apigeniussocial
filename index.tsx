import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ... existing code ...
import App from './App';
// ... existing code ...

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ... existing code ...