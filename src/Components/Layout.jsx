import Header from "./Header"
import Navigation from "./Navigation"
import styled from "styled-components"

const Layout = ({title, children}) => {
    return (
        <GridContainer>
            <Navigation />
            <Header title={title}/>
            { children }
        </GridContainer>
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr 6fr;
`

export default Layout;