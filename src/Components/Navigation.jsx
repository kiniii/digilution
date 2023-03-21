import React from 'react'
import Logo from "../Login/assets/logo.svg"
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className='nav'>
            <div>
                <img src={Logo} className="nav-logo" alt="logo digilution" />
            </div>
            <div>
                <label className="nav-title">Welkom Kinlok Lau</label>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navigation