import styled from "styled-components";
import { layout, space, grid, flexbox, display, gridTemplateColumns, justifyContent, alignItems, color } from "styled-system";

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
`;

export default Box;