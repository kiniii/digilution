import React from "react"
import styled from "styled-components";
import TextField from "../fields/TextField";

const InputPopup = ({onChange, type, value, placeholder}) => {
    return(
        <InputPopupStyle>
            <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </InputPopupStyle>
    )
}

const InputPopupStyle = styled.div`   
    justify-content: center;
    align-items: center;
    `
const Input = styled(TextField)` 
    height: 40px;
    margin: 5px 0px;
    width: 100%;
    max-width: 350px;
    `
export default InputPopup;