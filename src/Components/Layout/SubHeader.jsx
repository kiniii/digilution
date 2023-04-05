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
    margin: 0 20px;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    `
export default SubHeader;