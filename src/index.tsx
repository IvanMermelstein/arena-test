import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContext from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import TransferPage from './pages/TransferPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/transaction/:id',
    element: <TransferPage />
  }
]);

root.render(
  <React.StrictMode>
    <AppContext>
      <div className='w-screen min-h-screen bg-gray-800 flex flex-col items-center'>
        <RouterProvider router={router} />
      </div>
    </AppContext>
  </React.StrictMode>
);
