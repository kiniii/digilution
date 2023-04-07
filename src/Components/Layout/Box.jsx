import styled from "styled-components";
import { layout, space, grid, flexbox, display, gridTemplateColumns, justifyContent, alignItems, color, position, textAlign, borders } from "styled-system";

const Box = styled.div`
    ${display}
    ${layout}
    ${space}
    ${grid}
    ${flexbox}
    ${gridTemplateColumns}
    ${justifyContent}
    ${alignItems}
    ${color}
    ${position}
    ${textAlign}
    ${borders}
`;

export default Box;