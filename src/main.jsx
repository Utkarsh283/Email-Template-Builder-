/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Editor from './pages/Editor.jsx';
import Layout from './Layout.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/Email-Template-Builder-/' element={<Layout />} >
        <Route path='' element={<Editor />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

