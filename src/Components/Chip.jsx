import styled from "styled-components";
import { color, space } from 'styled-system';

const Chip = styled.div` 
    ${color};
    ${space};
    border-radius: 10px;
    height: 25px;
`; 

Chip.defaultProps = {
    backgroundColor: "greenBackground",
    color: "greenText"
}

export default Chip;