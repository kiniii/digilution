import { useState } from 'react'
import React from 'react'
import './App.css'
import Login_Email from "./Login/login"
import Navigation from './Components/Navigation'

function App() {
    return (
        <div className='App'>
            <Login_Email />
            <Navigation />
        </div>
    )
}

export default App

