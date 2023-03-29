import styled from "styled-components";
import Header from "./Header"

const Button = ({children, onClick}) => {
    return (
        <StyleButton onClick={onClick} test="green">
            {children}
            <span>{children}</span>
        </StyleButton>
    )
}

const StyleButton = styled.button`
padding: 20px;
background-color: ${({theme})=>theme.colors.primary};
font: ${({theme})=>theme.font.h1Font};
span{
    color: white;
}
`;

export default Button;