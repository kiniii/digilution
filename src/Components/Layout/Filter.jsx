import styled from "styled-components";
import { display } from 'styled-system';

const Filter = ({children, display}) => {
    return(
        <>
            <FilterStyle display={display}>
                {children} 
            </FilterStyle>
        </>
    )
}

const FilterStyle = styled.div` 
    padding: 0px 30px;
    background-color: ${({theme: {colors} }) => colors.lightBackground};
    ${display}
    `
Filter.defaultProps = {
    width: "10%",
    display: "none"
}
export default Filter;