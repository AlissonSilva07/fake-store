import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Inbox from './pages/Inbox';
import SingleProductView from './modules/SingleProductView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: '/products/:pageId',
        element: <SingleProductView />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'inbox',
        element: <Inbox />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
