import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md"
import { AiFillBell } from "react-icons/ai"
import profile from "../assets/logo.svg"
import Box from './Box';

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
            <HeaderStyle>
                <Box display="flex" m={[0, "1.5rem"]} width="60%" justifyContent="left">
                    <Box onClick={handleBack} as="button" backgroundColor="primary" border="none">
                        <MdArrowBackIosNew className='icon'/>
                    </Box>
                    <Box display="flex" alignItems="center" as="h1">{title}</Box>
                </Box>
                <Box display="flex" m={[0, "1.5rem"]} width="20%" justifyContent="right">
                    <AiFillBell className='icon'/>
                    <Box onClick={handleProfile} as="button" backgroundColor="primary" border="none">
                        <Profile src={profile} alt="" />
                    </Box>
                </Box>
            </HeaderStyle>
        </>
    )
}

const HeaderStyle = styled.div` 
    display: flex;
    background-color: ${({theme: {colors} }) => colors.primary};
    grid-column-start: 2;
    grid-column-end: 6;
    padding: 20px 0;
    `
const Profile = styled.img` 
    height: 64px;
    width: 64px;
    right: 5%;
    top: 23px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    background-color: ${({theme: {colors} }) => colors.secondary};
    `
export default Header;