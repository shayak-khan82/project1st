import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout.jsx';
import Practice from './components/Practice/Practice.jsx';
import Home from './components/Home/Home.jsx';
import Interviewer from './components/Interviewer/Interviewer.jsx';
import Login from './components/Login/Login.jsx';
import Resources from './components/Resources/Resources.jsx';
import Signup from './components/Sigup/Signup.jsx';
// Define router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'practice',
        element: <Practice/>,
      },
      {
        path:'interviewers',
        element: <Interviewer/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'resources',
        element: <Resources/>
      },
      {
        path:'signup',
        element: <Signup/>
      }

    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
