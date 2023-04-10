import React from "react"
import styled from "styled-components";
import Box from "../Layout/Box";

function Popup(props) {
    return (props.trigger) ? (
        <PopupStyle>
            <Box position="relative" p={32} width="100%" maxWidth={640} backgroundColor="primary" borderRadius={8} border={["2px solid"]} borderColor="secondary">
                <Box onClick={() => props.setTrigger(false)} as="button" position="absolute" top={16} right={16}>X</Box>
                { props.children }
            </Box>
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
export default Popup;