import { useState } from 'react'
import Background from "./assets/background.svg"
import Logo from "./assets/logo.svg"
import './login.css'

const Login_Password = () =>{
    const test = () => (
        alert("test")
    )

    return (
       <div className='login-page'>  
            <div className='login'>
                <img src={Logo} className="logo" alt="logo digilution" />
                <label className="titel-login">Welkom terug</label>
                <input className="input" type="password" placeholder='password' />
                <div className='button-position'>
                    <button className='button' onClick={test}>Log in</button>
                </div>
            </div>
             <img src={Background} className="background" alt="background digilution" /> 
        </div>
    )
}

export default Login_Password