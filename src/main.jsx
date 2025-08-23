import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Bookdetail from './components/Bookdetails/Bookdetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageGraph from './components/Graph/PageGraph';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>
    },
    {
      path: '/books/:bookdetail',
      element: <Bookdetail></Bookdetail>,
      loader: () => fetch(`/data.json`)
    },
  {
    path:'/listed-books',
    element:<ListedBooks></ListedBooks>,
    loader: ()=>fetch('/data.json')
  },
{
  path:'/Pages-to-read',
  element:<PageGraph></PageGraph>

}]
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>

)
