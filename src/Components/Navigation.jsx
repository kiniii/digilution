import React, { useState } from 'react'
import Logo from "./assets/logo.svg"
import styled from "styled-components";

import { FaHome } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";  
import { RiSettingsFill } from "react-icons/ri";  
import { RiLogoutBoxLine } from "react-icons/ri"; 

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
                            <FaHome className='icon'/>
                            <Text>Dashboard</Text>
                        </NavItem>
                    </Pos1>
                    <Pos2>
                        <NavItem href="/projects">
                            <IoIosPaper className='icon'/>
                            <Text>Projecten</Text>
                        </NavItem>
                    </Pos2>
                    <Pos3>
                        <NavItem href="/relations">
                            <BsPeopleFill className='icon'/>
                            <Text>Relaties</Text>
                        </NavItem>
                    </Pos3>
                    <Pos4>
                        <NavItem href="/calendar">
                            <AiFillCalendar className='icon'/>
                            <Text>Kalender</Text>
                        </NavItem>
                    </Pos4>
                    <Pos5>
                        <NavItem href="/settings">
                            <RiSettingsFill className='icon'/>
                            <Text>Instellingen</Text>
                        </NavItem>
                    </Pos5>
                    <Pos6>
                        <NavItem href="/">
                            <RiLogoutBoxLine className='icon'/>
                            <Text>Uitloggen</Text>
                        </NavItem>
                    </Pos6>
                </NavList>
            </div>
        </Nav>
    )
}
    const Nav = styled.div` 
    position: fixed;
    width: 328px;
    height: 1024px;
    left: 0px;
    top: 0px;
    background-color: #161510;
    `
    const LogoNav = styled.img` 
    pposition: absolute;
    left: 8.54%;
    right: 8.84%;
    top: 4.88%;
    bottom: 89.84%;

    width: 270px;
    height: auto;
    `
    const NavList = styled.ul` 
    list-style: none;
    height: 100%;
    margin: 0;
    padding-left: 0;
    &:.icon{
        height: 25px;
        width: 22px;
        color: #FFFFFF;
        margin-left: 30%;
    }
    `
    const Welcome = styled.label` 
    position: absolute;
    width: 328px;
    height: 64px;
    left: 0%;
    right: 0.09%;
    top: 16.02%;
    bottom: 77.73%;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #FFFFFF; 
    `
    const NavItem = styled.a` 
    text-decoration: none;
    width: 328px;
    height: 84px;
    display: flex;
    left: 0%;
    right: 0%;
    align-items: center;
    &:hover {
        background: linear-gradient(270deg, #F95B1C 0%, rgba(255, 255, 255, 0) 33.84%);
    }   
    `
    const Text = styled.p` 
    position: absolute;
    width: 180px;
    right: 0%;
    text-align: left;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    `
    const Pos1 = styled.li` 
    position: absolute;
    top: 238px;
    `
    const Pos2 = styled.li` 
    position: absolute;
    top: 322px;
    `
    const Pos3 = styled.li` 
    position: absolute;
    top: 406px;
    `
    const Pos4 = styled.li` 
    position: absolute;
    top: 490px;
    `
    const Pos5 = styled.li` 
    position: absolute;
    top: 826px;
    `
    const Pos6 = styled.li` 
    position: absolute;
    top: 910px;
    `


export default Navigation