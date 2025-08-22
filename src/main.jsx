import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>

)
