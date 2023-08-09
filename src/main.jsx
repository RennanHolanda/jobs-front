import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import JobDetails from './routes/JobDetails.jsx';
import RegisterJobs from './routes/RegisterJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/job/:id",
        element: <JobDetails />
      },
      {
        path:"/registerjobs",
        element: <RegisterJobs />
      }
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


