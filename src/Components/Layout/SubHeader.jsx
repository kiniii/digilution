import styled from "styled-components";

const SubHeader = ({children}) => {
    return(
        <>
            <SubHeaderStyle>
                {children} 
            </SubHeaderStyle>
        </>
    )
}

const SubHeaderStyle = styled.div` 
    justify-content: space-between;
    padding: 30px 0px;
    margin: 0 1.5rem;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    `
export default SubHeader;