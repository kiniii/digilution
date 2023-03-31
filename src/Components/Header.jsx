import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
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
            <HeaderStyle>
                <Left>
                    <ButtonBack onClick={handleBack}>
                        <MdArrowBackIosNew className='icon'/>
                    </ButtonBack>
                    <PageName>{title}</PageName>
                </Left>
                <Right>
                    <AiFillBell className='icon'/>
                    <ButtonBack onClick={handleProfile}>
                        <Profile src={profile} alt="" />
                    </ButtonBack>
                </Right>
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
const Left = styled.div` 
    margin-left: 20%;
    width: 100%;
    display: flex;
    justify-content: left;
    color: white;
    `
const Right = styled.div` 
    margin-right: 2%;
    display: flex;
    align-items: center;
    width: 30%;
    `
const ButtonBack = styled.button` 
    background-color: ${({theme: {colors} }) => colors.primary};
    border: none;
    `
const PageName = styled.h1` 
    margin-left: 2%;
    display: flex;
    align-items: center;
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