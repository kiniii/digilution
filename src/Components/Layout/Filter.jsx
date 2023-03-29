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
    position: absolute;
    height: 100%;
    padding: 0px 30px;
    right: 0px;
    top: 20%;
    background-color: ${({theme: {colors} }) => colors.lightBackground};
    ${display}
    `
Filter.defaultProps = {
    width: "10%",
    display: "none"
}
export default Filter;