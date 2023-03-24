import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        overflow: hidden;
    }

    input {
        font-family: ${({theme: {font} }) => font.h3FontFamily};
        font-size: ${({theme: {font} }) => font.h3FontSize};
        font-weight: ${({theme: {font} }) => font.h3FontWeight};
        color: ${({theme: {colors} }) => colors.lightBackground};
        background: ${({theme: {colors} }) => colors.primary};
        border: 1px solid ${({theme: {colors} }) => colors.white};
        border-radius: 8px;
    }

    button {
        background: ${({theme: {colors} }) => colors.secondary};
        border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
        border-radius: 8px;

        align-items: center;
        text-align: center;
        font-family: ${({theme: {font} }) => font.h1FontFamily};
        font-size: ${({theme: {font} }) => font.h1FontSize};
        font-weight: ${({theme: {font} }) => font.h1FontWeight};
        color:  ${({theme: {colors} }) => colors.white};
    }

    .icon {
        height: 25px;
        width: 22px;
        color: ${({theme: {colors} }) => colors.white};
        margin-right: 10%;
    }

    h1 {
        font-family: ${({theme: {font} }) => font.h1FontFamily};
        font-size: ${({theme: {font} }) => font.h1FontSize};
        font-weight: ${({theme: {font} }) => font.h1FontWeight};
        color:  ${({theme: {colors} }) => colors.white};
    }

    h2 {
        font-family: ${({theme: {font} }) => font.h2FontFamily};
        font-size: ${({theme: {font} }) => font.h2FontSize};
        font-weight: ${({theme: {font} }) => font.h2FontWeight};
        color:  ${({theme: {colors} }) => colors.white};
    }

    h3 {
        font-family: ${({theme: {font} }) => font.h3FontFamily};
        font-size: ${({theme: {font} }) => font.h3FontSize};
        font-weight: ${({theme: {font} }) => font.h3FontWeight};
        color:  ${({theme: {colors} }) => colors.white};
    }

    p {
        font-family: ${({theme: {font} }) => font.pFontFamily};
        font-size: ${({theme: {font} }) => font.pFontSize};
        font-weight: ${({theme: {font} }) => font.pFontWeight};
        color:  ${({theme: {colors} }) => colors.white};
    }
 `;

export default Global;