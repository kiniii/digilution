import { useState } from 'react'
import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import Password from "./login-password.jsx"
import './login.css'

function Login_Email(){
    return (
        <div className='login-page'>  
            <div className='login'>
                <img src={Logo} className="logo" alt="logo digilution" />
                <label className="titel-login">Welkom terug</label>
                <input className="input" type="email" placeholder='mail@mail.com' />
                <div className='button-position'>
                    <button className='button' onClick={Password}>Log in</button>
                </div>
            </div>
             <img src={Background} className="background" alt="background digilution" /> 
        </div>
    )
}

export default Login_Email