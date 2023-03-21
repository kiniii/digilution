import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from "./pages/authentication/Login"
import Login_Password from "./pages/authentication/Login_Password"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
    const router = createBrowserRouter([
        {
            path:"/", 
            element: <Login />
        },
        {
            path:"/login-password", 
            element: <Login_Password />
        },
        {
            path:"/dashboard", 
            element: <Dashboard />
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App

