import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import styled from "styled-components";
import Box from "./Box";

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
            <Box width={200} height="auto">
                <LogoNav src={Logo} alt="logo digilution" />
            </Box>
            <Box position="absolute" top="13%" alignItems="center" textAlign="center">
                <h1>Welkom {firstName}</h1>
            </Box>
                <NavList>
                    <Box height="auto" flexDirection="column" justifyContent="space-between">
                    <TopNavContainer>
                        <NavItem to="/dashboard">
                            <Box ml="20%">
                                <FaHome className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Dashboard</Box>
                        </NavItem>
                        <NavItem to="/projects">
                            <Box ml="20%">
                                <IoIosPaper className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Projecten</Box>
                        </NavItem>
                        <NavItem to="/relations">
                            <Box ml="20%">
                                <BsPeopleFill className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Relaties</Box>
                        </NavItem>
                        <NavItem to="/calendar">
                            <Box ml="20%">
                                <AiFillCalendar className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Kalender</Box>
                        </NavItem>
                    </TopNavContainer>
                    <BottomNavContainer>
                        <NavItem to="/settings">
                            <Box ml="20%">
                                <RiSettingsFill className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Instellingen</Box>
                        </NavItem>
                        <NavItem to="/">
                            <Box ml="20%">
                                <RiLogoutBoxLine className='icon'/>
                            </Box>
                            <Box as="h3" width="60%" textAlign="center">Uitloggen</Box>
                        </NavItem>
                    </BottomNavContainer>
                    </Box>
                </NavList>
        </Nav>
    )
}
    const Nav = styled.div` 
    position: sticky;
    height: 100vh;
    background-color: ${({theme: {colors} }) => colors.primary};
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 8;
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
    margin: 10% 0;
    padding: 0;
    list-style: none;
    height: 100vh;
    `
    const NavItem = styled(Link)` 
    display: flex;
    text-decoration: none;
    padding: 10px 15px;
    gap: 15px;
    width: 100%;
    align-items: center;
    &:hover {
        background: linear-gradient(270deg, #F95B1C 0%, rgba(255, 255, 255, 0) 33.84%);
    }   
    `
    const BottomNavContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: 200px;
    `
    const TopNavContainer = styled.div`
    position: absolute;
    height: 200px;
    `
export default Navigation