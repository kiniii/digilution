import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md"
import { AiFillBell } from "react-icons/ai"
import profile from "../assets/logo.svg"


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
    grid-column-start: 2;
    grid-column-end: 6;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    background-color: ${({theme: {colors} }) => colors.primary};
    `
const Left = styled.div` 
    width: 60%;
    margin: 0 1.5rem;
    display: flex;
    `
const Right = styled.div` 
    display: flex;
    align-items: center;
    justify-content: right;
    width: 20%;
    margin: 0 1.5rem;

    `
const ButtonBack = styled.button` 
    background-color: ${({theme: {colors} }) => colors.primary};
    border: none;
    `
const PageName = styled.h1` 
    display: flex;
    align-items: center;
    `
const Profile = styled.img` 
    height: 64px;
    width: 64px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    `
export default Header;