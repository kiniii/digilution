import styled from "styled-components";
import { color } from 'styled-system';
import ButtonField from "./ButtonField";

const Button = ({children, onClick, color}) => {
    return (
        <StyleButton backgroundColor={color} onClick={onClick}>
            {children}
        </StyleButton>
    )
}

const StyleButton = styled(ButtonField)` 
    box-sizing: border-box;
    width: 166px;
    height: 60px;
    &:hover {
        filter: brightness(120%);
    }
    ${color};
`
Button.defaultProps = {
    backgroundColor: "secondary",
    color: "white"
}
export default Button;