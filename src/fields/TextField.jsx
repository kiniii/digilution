import styled from "styled-components";

const TextField = styled.input` 
    font-family: ${({theme: {font} }) => font.h3FontFamily};
    font-size: ${({theme: {font} }) => font.h3FontSize};
    font-weight: ${({theme: {font} }) => font.h3FontWeight};
    color: ${({theme: {colors} }) => colors.lightBackground};
    background: ${({theme: {colors} }) => colors.primary};
    border: 1px solid ${({theme: {colors} }) => colors.white};
    border-radius: 8px;
    width: 340px;
    height: 40px;
` 

export default TextField;