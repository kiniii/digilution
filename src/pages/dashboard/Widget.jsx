import React from "react";
import styled from "styled-components";
import {height, width} from 'styled-system';

const Widget = ({height, width}) => {
    return (
        <>
        <WidgetStyle height={height} width={width}>
        </WidgetStyle>
        </>
    )    
}

const WidgetStyle = styled.div`
background-color: ${({theme:{colors}})=>colors.primary};
${height}
${width}
`

export default Widget;