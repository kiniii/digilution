import styled from "styled-components";
import { layout, space, grid, flexbox, display, alignItems, textAlign, position, color, borders, gridTemplateColumns, justifyContent } from "styled-system";

const Box = styled.div`
    ${display}
    ${layout}
    ${space}
    ${grid}
    ${flexbox}
    ${alignItems}
    ${textAlign}
    ${position}
    ${color}
    ${borders}
    ${gridTemplateColumns}
    ${justifyContent}
`

export default Box;