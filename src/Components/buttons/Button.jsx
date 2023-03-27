import styled from "styled-components";
import ButtonField from "./ButtonField";

const Button = ({children, onClick}) => {
    return (
        <StyleButton onClick={onClick}>
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
    `
Button.defaultProps = {
    backgroundColor: "secondary",
    color: "white"
}
export default Button;