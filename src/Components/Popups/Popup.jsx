import React from "react"
import styled from "styled-components";
import Box from "../Layout/Box";

function Popup(props) {
    return (props.trigger) ? (
        <PopupStyle>
            <Box  width="100%" maxWidth={640} p={32} position="relative" borderRadius={8} border={["3px solid"]} borderColor="secondary" backgroundColor="primary">
                <Box as="button" position={"absolute"} top={16} right={16} onClick={() => props.setTrigger(false)}>X</Box>
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