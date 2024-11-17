import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Components/router/Routes.jsx'
import AuthProbaider from './Components/probaider/AuthProbaider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProbaider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProbaider>
  </StrictMode>,
)
