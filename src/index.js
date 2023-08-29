import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
const App = React.lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

