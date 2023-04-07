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
    const [firstName, setFirstName] = useState("kinlok");

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
                        <NavItem to="/dashboard">
                            <GroupIconText>
                            <IconPos>
                                <FaHome className='icon'/>
                            </IconPos>
                            <Text>Dashboard</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem to="/projects">
                            <GroupIconText>
                            <IconPos>
                                <IoIosPaper className='icon'/>
                            </IconPos>
                            <Text>Projecten</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem to="/relations">
                            <GroupIconText>
                            <IconPos>
                                <BsPeopleFill className='icon'/>
                            </IconPos>
                            <Text>Relaties</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem to="/calendar">
                            <GroupIconText>
                            <IconPos>
                                <AiFillCalendar className='icon'/>
                            </IconPos>
                            <Text>Kalender</Text>
                            </GroupIconText>
                        </NavItem>
                    <BottomNavContainer>
                        <NavItem to="/settings">
                            <GroupIconText>
                            <IconPos>
                                <RiSettingsFill className='icon'/>
                            </IconPos>
                            <Text>Instellingen</Text>
                            </GroupIconText>
                        </NavItem>
                        <NavItem to="/">
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
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 8;
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
    margin-top: 50px;
    flex-direction: column;
    list-style: none;
    `
    const Welcome = styled.h3` 
    position: absolute;
    width: 328px;
    top: 13%;
    align-items: center;
    text-align: center;
    color: white;
    `
    const NavItem = styled(Link)` 
    text-decoration: none;
    &:hover {
        background: linear-gradient(270deg, #F95B1C 0%, rgba(255, 255, 255, 0) 33.84%);
    }   
    `
    const Text = styled.h5` 
    display: flex;
    text-align: center;
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