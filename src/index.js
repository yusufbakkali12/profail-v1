import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import App from './App';
// import Login from './dashbord/Login';
// import Dashboard from './dashbord/Dashboard';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>)

// const Login = React.lazy(() => import('./dashbord/Login'))
const App = React.lazy(() => import('./App'))
// const Dashboard = React.lazy(() => import('./dashbord/Dashboard'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  
  </React.StrictMode>
);

