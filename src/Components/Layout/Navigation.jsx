import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import styled from "styled-components";

import { FaHome } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";  
import { RiSettingsFill } from "react-icons/ri";  
import { RiLogoutBoxLine } from "react-icons/ri"; 
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [firstName, setFirstName] = useState("Maikel");

    return (
        <Nav>
            <div>
                <LogoNav src={Logo} alt="logo digilution" />
            </div>
            <div>
                <Welcome>Welkom {firstName}</Welcome>
            </div>
            <div>
                <NavList>
                    <Pos1>
                        <NavItem href="/dashboard">
                            <IconPos>
                                <FaHome className='icon'/>
                            </IconPos>
                            <Text>Dashboard</Text>
                        </NavItem>
                    </Pos1>
                    <li>
                        <NavItem href="/projects">
                            <IconPos>
                                <IoIosPaper className='icon'/>
                            </IconPos>
                            <Text>Projecten</Text>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/relations">
                            <IconPos>
                                <BsPeopleFill className='icon'/>
                            </IconPos>
                            <Text>Relaties</Text>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/calendar">
                            <IconPos>
                                <AiFillCalendar className='icon'/>
                            </IconPos>
                            <Text>Kalender</Text>
                        </NavItem>
                    </li>
                    <Pos5>
                        <NavItem href="/settings">
                            <IconPos>
                                <RiSettingsFill className='icon'/>
                            </IconPos>
                            <Text>Instellingen</Text>
                        </NavItem>
                    </Pos5>
                    <li>
                        <NavItem href="/">
                            <IconPos>
                                <RiLogoutBoxLine className='icon'/>
                            </IconPos>
                            <Text>Uitloggen</Text>
                        </NavItem>
                    </li>
                </NavList>
            </div>
        </Nav>
    )
}
    const Nav = styled.div` 
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 8;
    height: 100vh;
    position: sticky;
    background-color: ${({theme: {colors} }) => colors.primary};
    `
    const IconPos = styled.div` 
    margin-left: 20%;
    `
    const LogoNav = styled.img` 
    margin-top: 10%;
    width: 200px;
    height: auto;
    `
    const NavList = styled.ul` 
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    `
    const Welcome = styled.h1` 
    width: 100%;
    height: 64px;
    margin-top: 10%;
    align-items: center;
    text-align: center;
    `
    const NavItem = styled(Link)` 
    text-decoration: none;
    width: 100%;
    height: 84px;
    display: flex;
    left: 0%;
    right: 0%;
    align-items: center;
    &:hover {
        background: linear-gradient(270deg, #F95B1C 0%, rgba(255, 255, 255, 0) 33.84%);
    }   
    `
    const Text = styled.h3` 
    width: 80%;
    right: 0%;
    text-align: center;
    `
    const Pos1 = styled.li` 
        margin-top: 10%;
    `
    const Pos5 = styled.li` 
        margin-top: 50%;
    `
export default Navigation