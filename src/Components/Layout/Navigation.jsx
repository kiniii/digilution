import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import styled from "styled-components";
import Box from './Box';

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
            <Box width={200} mt={"10%"} height={"auto"}>
                <img src={Logo} alt="logo digilution" />
            </Box>
            <Box width={"100%"} height={64} mt={"10%"} alignItems={"center"} textAlign={"center"}>
                <h1>Welkom {firstName}</h1>
            </Box>
            <div>
                <NavList>
                    <Box height={"auto"} flexDirection={"column"} JustifyContent={"space-between"}>
                    <div>
                    <li>
                        <NavItem to="/dashboard">
                            <Box ml={"20%"}>
                                <FaHome className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Dashboard</Box>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/projects">
                            <Box ml={"20%"}>
                                <IoIosPaper className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Projecten</Box>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/relations">
                            <Box ml={"20%"}>
                                <BsPeopleFill className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Relaties</Box>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/calendar">
                            <Box ml={"20%"}>
                                <AiFillCalendar className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Kalender</Box>
                        </NavItem>
                    </li>
                    </div>
                    <div>
                    <li>
                        <NavItem to="/settings">
                            <Box ml={"20%"}>
                                <RiSettingsFill className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Instellingen</Box>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/">
                            <Box ml={'20%'}>
                                <RiLogoutBoxLine className='icon'/>
                            </Box>
                            <Box as="h3" width={"80%"} textAlign={"center"} right={"0%"}>Uitloggen</Box>
                        </NavItem>
                    </li>
                    </div>
                    </Box>
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
    const NavList = styled.ul` 
    list-style: none;
    height: 100%;
    margin: 10% 0;
    padding: 0;
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
export default Navigation