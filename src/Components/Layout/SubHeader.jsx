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
    position: absolute;
    justify-content: space-around;
    width: 78%;
    padding: 30px 0px;
    left: 22%;
    top: 10%;
    display: flex;
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    `
export default SubHeader;