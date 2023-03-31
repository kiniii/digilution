import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import './App.css'
import Global from "./GlobalStyle"
import thema from "./thema"

import Login from "./pages/authentication/Login"
import Login_Password from "./pages/authentication/Login_Password"
import Dashboard from './pages/dashboard/Dashboard'
import Projects from "./pages/projects/Projects"
import Relations from "./pages/relations/Relations"
import Calendar from "./pages/calendar/Calendar"
import Instellingen from "./pages/settings/Instellingen"
import Account from "./pages/account/Account"
import Navigation from "./components/Navigation"
import thema from "./thema"
import { ThemeProvider } from 'styled-components'

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
        },
        {
            path:"/projects", 
            element: <Projects />
        },
        {
            path:"/relations", 
            element: <Relations />
        },
        {
            path:"/calendar", 
            element: <Calendar />
        },
        {
            path:"/settings", 
            element: <Instellingen />
        },
        {
            path:"/account", 
            element: <Account />
        }
    ])

    return (
        <ThemeProvider theme={thema}>
            <RouterProvider router={router}/>
            <Global />
        </ThemeProvider>
    )
}

export default App

