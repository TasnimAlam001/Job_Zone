import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Layout/root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import appliedJobLoader from './loaders/appliedJobsLoader';
import NotFound from './components/NotFound/NotFound';
const router =createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('jobs.json')
      },
      {
        path:'/:JobDetailsId',
        element: <JobDetails></JobDetails>,
        loader: ({params})=>fetch(`jobs.json`)

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobLoader
        
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
      
    
    
    ]
      
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
