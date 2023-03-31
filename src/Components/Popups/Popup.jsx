import React from "react"
import styled from "styled-components";

function Popup(props) {
    return (props.trigger) ? (
        <PopupStyle>
            <PopupInner>
                <ButtonClose onClick={() => props.setTrigger(false)}>X</ButtonClose>
                { props.children }
            </PopupInner>
        </PopupStyle>
    ) : "";
}

const PopupStyle = styled.div` 
    position: fixed;
    display: flex;
    top: 50%;
    left: 50%;    
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    `
const PopupInner = styled.div` 
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: ${({theme: {colors} }) => colors.primary};
    `
const ButtonClose = styled.button` 
    position: absolute;
    top: 16px;
    right: 16px;
    `
export default Popup;