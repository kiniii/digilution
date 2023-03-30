import React from "react";
import styled from "styled-components";
import {height, width} from 'styled-system';

const Widget = ({height, width, children}) => {
    return (
        <>
        <WidgetStyle height={height} width={width}>
            {children}
        </WidgetStyle>
        </>
    )    
}

const WidgetStyle = styled.div`
background-color: ${({theme:{colors}})=>colors.primary};
border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    border-radius: 8px;
${height}
${width}
`

Widget.defaultProps = {
    height: "300px",
    width: "328px",
    gridColumn: "span 1"
}

export default Widget;