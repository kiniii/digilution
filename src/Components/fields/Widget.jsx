import styled from "styled-components";
import { gridColumn, height, width } from 'styled-system';

const Widget = ({children, height, gridColumn, width}) => {
    return(
        <>
            <WidgetStyle height={height} gridColumn={gridColumn} width={width}>
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
    ${height}
    ${gridColumn}
    `
Widget.defaultProps = {
    height: "39%",
    gridColumn: "span 1"
}
export default Widget;