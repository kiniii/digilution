import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Header.css"
import { MdArrowBackIosNew } from "react-icons/md"
import { AiFillBell } from "react-icons/ai"
import profile from "./assets/logo.svg"

const Header = ({title}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/dashboard")
    }

    const handleProfile = () => {
        navigate("/account")
    }

    return(
        <>
            <div className='header'>
                <div className='left'>
                    <button className='button-back' onClick={handleBack}>
                        <MdArrowBackIosNew className='icon' />
                    </button>
                    <h1 className='pageName'>{title}</h1>
                </div>
                <div className='right'>
                    <AiFillBell className='icon'/>
                    <button className='button-back' onClick={handleProfile}>
                        <img className='profile-image' src={profile} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;