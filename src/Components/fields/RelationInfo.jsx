import React, { useState } from 'react';
import styled from 'styled-components';

import profile from "../../components/assets/logo.svg"

import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Relation = ({companyName, straat, postcode, stad, statusName}) => {
    const navigate = useNavigate();

    const handleRelation = () => {
        navigate("/relation")
    }

    return(
        <>
            <RelationCard onClick={handleRelation}>
                <Profile>
                    <ProfilePicture src={profile} alt="" />
                    <ProfileName>{companyName}</ProfileName>
                </Profile>
                <Location>
                    <h1>{straat}</h1>
                    <LocationRow2 className='location-placement'>
                        <h1>{postcode}</h1>
                        <h1>{stad}</h1>
                    </LocationRow2>
                </Location>
                <Contact >
                    <FaPhoneAlt />
                    <HiOutlineMail />
                    <TbWorld />
                </Contact>
                <Status>
                    <h1>{statusName}</h1>
                </Status>
            </RelationCard>
        </>
    )
}

const RelationCard = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${({theme: {colors} }) => colors.white};
    border-bottom: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    `
const Profile = styled.div` 
    display: flex;
    align-items: center;
    `
const ProfilePicture = styled.img` 
    height: 64px;
    width: 64px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    `
const ProfileName = styled.h1` 
    margin: 10px;
    `
const Location = styled.div` 
    margin: 10px;
    `
const LocationRow2 = styled.div` 
    display: flex;
    `
const Contact = styled.div` 
    margin: 10px;
    `
const Status = styled.div` 
    margin: 10px;
    `
export default Relation;