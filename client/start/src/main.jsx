import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SignIn from './components/signIn/SignIn.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>worng path</div>,
  },
  {
    path:'/signIn',
    element:<SignIn/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-slate-500'>

    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
