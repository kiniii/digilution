import React from "react";
import styled from "styled-components";
import {height, width, gridColumn} from 'styled-system';

const Widget = ({height, width, children, gridColumn}) => {
    return (
        <>
        <WidgetStyle height={height} width={width} gridColumn={gridColumn}>
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
${gridColumn}
`

Widget.defaultProps = {
    height: "300px",
    gridColumn: "span 1"
}

export default Widget;