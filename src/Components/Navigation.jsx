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
    const [firstName, setFirstName] = useState("Kinlok");

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
                        <NavItem href="/dashboard">
                            <GroupIconText>
                            <IconPos>
                                <FaHome className='icon'/>
                            </IconPos>
                            <Text>Dashboard</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem href="/projects">
                            <GroupIconText>
                            <IconPos>
                                <IoIosPaper className='icon'/>
                            </IconPos>
                            <Text>Projecten</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem href="/relations">
                            <GroupIconText>
                            <IconPos>
                                <BsPeopleFill className='icon'/>
                            </IconPos>
                            <Text>Relaties</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem href="/calendar">
                            <GroupIconText>
                            <IconPos>
                                <AiFillCalendar className='icon'/>
                            </IconPos>
                            <Text>Kalender</Text>
                            </GroupIconText>
                        </NavItem>
                    <BottomNavContainer>
                        <NavItem href="/settings">
                            <GroupIconText>
                            <IconPos>
                                <RiSettingsFill className='icon'/>
                            </IconPos>
                            <Text>Instellingen</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem href="/">
                            <GroupIconText>
                            <IconPos>
                                <RiLogoutBoxLine className='icon'/>
                            </IconPos>
                            <Text>Uitloggen</Text>
                            </GroupIconText>
                        </NavItem>
                    </BottomNavContainer>
                </NavList>
            </div>
        </Nav>
    )
}
    const Nav = styled.div` 
    display: flex;
    width: 328px;
    height: 100vh;
    background-color: ${({theme: {colors} }) => colors.primary};
    `
    const IconPos = styled.div` 
    display: flex;
    flex-direction: column;
    `
    const LogoNav = styled.img` 
    display: flex;
    position: absolute;
    left: 2%;
    right: 8.84%;
    top: 4.88%;
    bottom: 89.84%;
    width: 270px;
    height: auto;
    `
    const NavList = styled.ul` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    `
    const Welcome = styled.h2` 
    position: absolute;
    width: 328px;
    top: 10%;
    align-items: center;
    text-align: center;
    color: white;
    `
    const NavItem = styled.a` 
    text-decoration: none;
    &:hover {
        background: linear-gradient(270deg, #F95B1C 0%, rgba(255, 255, 255, 0) 33.84%);
    }   
    `
    const Text = styled.h4` 
    display: flex;
    text-align: left;
    `
    
    const GroupIconText = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    `

    const BottomNavContainer = styled.div`
    position: absolute;
    bottom: 0;
    height 200px;
    `


export default Navigation