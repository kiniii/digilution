import React from "react"
import styled from "styled-components";
import TextField from "../fields/TextField";
import Box from "../Layout/Box";

const InputPopup = ({onChange, type, value, placeholder}) => {
    return(
        <Box justifyContent="center" alignItems="center">
            <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </Box>
    )
}

const Input = styled(TextField)` 
    height: 40px;
    margin: 5px 0px;
    width: 100%;
    max-width: 350px;
    `
export default InputPopup;