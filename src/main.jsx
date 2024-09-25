import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx'
import GenerationPage from './pages/GenerationPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <PageNotFound/>

  },
  {
    path: '/generate',
    element: <GenerationPage />
    
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
