import styled from "styled-components";
import { gridColumn, minHeight, width } from 'styled-system';

const Widget = ({children, minHeight, gridColumn, width, onClick}) => {
    return(
        <>
            <WidgetStyle minHeight={minHeight} gridColumn={gridColumn} width={width} onClick={onClick}>
                {children} 
            </WidgetStyle>
        </>
    )
}

const WidgetStyle = styled.div` 
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    border-radius: 8px;
    background-color: ${({theme: {colors} }) => colors.primary};
    ${width}
    ${minHeight}
    ${gridColumn}
    cursor: pointer;
    `
Widget.defaultProps = {
    minHeight: "400px",
    gridColumn: "span 1"
}
export default Widget;