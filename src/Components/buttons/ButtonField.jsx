import styled from "styled-components";

const ButtonField = styled.button`
    background: ${({theme: {colors} }) => colors.secondary};
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    border-radius: 8px;

    align-items: center;
    text-align: center;
    font-family: ${({theme: {font} }) => font.h1FontFamily};
    font-size: ${({theme: {font} }) => font.h1FontSize};
    font-weight: ${({theme: {font} }) => font.h1FontWeight};
    color:  ${({theme: {colors} }) => colors.white};
    
` 

export default ButtonField;