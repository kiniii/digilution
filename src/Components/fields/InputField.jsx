import styled from "styled-components";
import TextField from "./TextField";
import React from "react";


const InputField = ({children, onChange, placeholder, value}) => {
    return (
        <Input type="text" onChange={onChange} placeholder={placeholder} value={value}>
            {children}
        </Input>
    )
};

const Input = styled(TextField)`
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    box-sizing: border-box;
    width: 60%;
    height: 60px;
    `;

export default InputField;