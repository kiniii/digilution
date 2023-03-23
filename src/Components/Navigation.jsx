import React from 'react'
import Logo from "./assets/logo.svg"
import "./Navigation.css"
import { FaHome } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";  
import { RiSettingsFill } from "react-icons/ri";  
import { RiLogoutBoxLine } from "react-icons/ri"; 

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
                <ul className='nav-list'>
                    <li className='nav-position'>
                        <a className='nav-item' href="/dashboard">
                            <FaHome className='icon'/>
                            <p className='nav-text'>Dashboard</p>
                        </a>
                    </li>
                    <li className='nav-position2'>
                        <a className='nav-item' href="/projects">
                            <IoIosPaper className='icon'/>
                            <p className='nav-text'>Projecten</p>
                        </a>
                    </li>
                    <li className='nav-position3'>
                        <a className='nav-item' href="/relations">
                            <BsPeopleFill className='icon'/>
                            <p className='nav-text'>Relaties</p>
                        </a>
                    </li>
                    <li className='nav-position4'>
                        <a className='nav-item' href="/calendar">
                            <AiFillCalendar className='icon'/>
                            <p className='nav-text'>Kalender</p>
                        </a>
                    </li>
                    <li className='nav-position5'>
                        <a className='nav-item' href="/settings">
                            <RiSettingsFill className='icon'/>
                            <p className='nav-text'>Instellingen</p>
                        </a>
                    </li>
                    <li className='nav-position6'>
                        <a className='nav-item' href="/">
                            <RiLogoutBoxLine className='icon'/>
                            <p className='nav-text'>Uitloggen</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation