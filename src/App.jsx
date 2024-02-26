import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from './router'

export default function App() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  )
}
