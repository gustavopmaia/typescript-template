import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import Users from './pages/Users'
import { Home } from './pages/Home'
import { Update } from './pages/UpdateUser'
import { Delete } from './pages/DeleteUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/update',
    element: <Update />,
  },
  {
    path: '/delete',
    element: <Delete />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
