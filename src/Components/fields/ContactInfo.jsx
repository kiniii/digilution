import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";
 
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Contact = ({contactName}) => {
    const navigate = useNavigate();

    const handleRelation = () => {
        navigate("/relation")
    }

    return(
        <>
            <ContactCard onClick={handleRelation}>
                    <ProfilePicture src={logo} alt="" />
                    <ProfileName>test{contactName}</ProfileName>
                <Cont>
                    <FaPhoneAlt className="icon"/>
                    <HiOutlineMail className="icon"/>
                    <TbWorld className="icon"/>
                </Cont>
            </ContactCard>
        </>
    )
}

const ContactCard = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    
    background-color: ${({theme: {colors} }) => colors.primary};
    `
const ProfilePicture = styled.img` 
    height: 64px;
    width: 64px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    `
const ProfileName = styled.h3` 
    margin: 10px;
    `
const Cont = styled.div` 
    width: 100px;
    `
export default Contact;