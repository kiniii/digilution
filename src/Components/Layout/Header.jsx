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
                <Box display={"flex"} m= {[0, "1.5rem"]} width={"60%"}>
                    <ButtonBack onClick={handleBack}>
                        <MdArrowBackIosNew className='icon'/>
                    </ButtonBack>
                    <Box as="h1" alignItems={"center"} display={"flex"}>{title}</Box>
                </Box>
                <Box display={"flex"} m= {[0, "1.5rem"]} width={"20%"} alignItems={"center"} justifyContent={"right"}>
                    <AiFillBell className='icon'/>
                    <ButtonBack onClick={handleProfile}>
                        <Profile src={profile} alt="" />
                    </ButtonBack>
                </Box>
            </HeaderStyle>
        </>
    )
}

const HeaderStyle = styled.div` 
    grid-column-start: 2;
    grid-column-end: 6;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    background-color: ${({theme: {colors} }) => colors.primary};
    `
const ButtonBack = styled.button` 
    background-color: ${({theme: {colors} }) => colors.primary};
    border: none;
    `
const Profile = styled.img` 
    height: 64px;
    width: 64px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    `
export default Header;