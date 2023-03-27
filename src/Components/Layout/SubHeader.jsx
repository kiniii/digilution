import styled from "styled-components";
import { useState } from "react";

const SubHeader = ({children}) => {
    return(
        <>
            <SubHeaderStyle>
                {children} 
            </SubHeaderStyle>
        </>
    )
}

const SubHeaderStyle = styled.div` 
    position: absolute;
    width: 85%;
    padding: 30px 0px;
    left: 328px;
    top: 111px;
    display: flex;
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    `
export default SubHeader;