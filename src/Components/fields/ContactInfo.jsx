import React from "react";
import Box from "../Layout/Box";

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
            <Box display="flex" justifyContent="space-between" alignItems="center" p="1.5rem" backgroundColor="primary" onClick={handleRelation}>
                    <Box as="img" height={64} width={64} borderRadius={64} border={["3px solid"]} src={logo} borderColor="secondary" alt="" />
                    <Box as="h3" m={10}>test{contactName}</Box>
                <Box width={100}>
                    <FaPhoneAlt className="icon"/>
                    <HiOutlineMail className="icon"/>
                    <TbWorld className="icon"/>
                </Box>
            </Box>
        </>
    )
}

export default Contact;