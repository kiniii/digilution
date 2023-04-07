import React, { useState } from 'react';
import Box from '../Layout/Box';

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
            <Box display="flex" justifyContent="space-between" alignItems="center" p="1.5rem" backgroundColor="white" borderBottom={["3px solid"]} borderColor="secondary" onClick={handleRelation}>
                <Box display="flex" alignItems="center">
                    <Box as="img" height={64} width={64} borderRadius={64} border={["3px solid"]} borderColor="secondary" src={profile} alt="" />
                    <Box m={10}>{companyName}</Box>
                </Box>
                <Box m={10}>
                    <h1>{straat}</h1>
                    <Box display="flex" className='location-placement'>
                        <h1>{postcode}</h1>
                        <h1>{stad}</h1>
                    </Box>
                </Box>
                <Box m={10}>
                    <FaPhoneAlt />
                    <HiOutlineMail />
                    <TbWorld />
                </Box>
                <Box m={10}>
                    <h1>{statusName}</h1>
                </Box>
            </Box>
        </>
    )
}

export default Relation;