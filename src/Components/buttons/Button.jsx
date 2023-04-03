import styled from "styled-components";
import { color, margin } from 'styled-system';
import ButtonField from "./ButtonField";

const Button = ({children, onClick, color, margin}) => {
    return (
        <StyleButton backgroundColor={color} margin={margin} onClick={onClick}>
            {children}
        </StyleButton>
    )
}

const StyleButton = styled(ButtonField)` 
    box-sizing: border-box;
    width: 150px;
    height: 60px;
    ${margin}
    &:hover {
        filter: brightness(120%);
    }
    ${color};
`
Button.defaultProps = {
    backgroundColor: "secondary",
    color: "white",
    margin: 0
}
export default Button;