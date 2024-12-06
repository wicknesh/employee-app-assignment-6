import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Entry from './components/Entry.jsx';
// import Edit from './components/Edit.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Entry />
  },
  {
    path: '/home',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
  // {
  //   path: '/edit',
  //   element: <Root />,
  //   children: [
  //     {
  //       path: '/edit',
  //       element: <Edit />
  //     }
  //   ]
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
