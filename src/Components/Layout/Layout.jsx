import Header from "./Header"
import Navigation from "./Navigation"
import styled from "styled-components"


const Layout = ({title, children}) => {
    return (
        <Grid>
            <Navigation />
            <Header title={title} />
            { children }
        </Grid>

    )
}
const Grid = styled.div` 
    display: grid;
    grid-template-columns: 300px 1fr;
    `

export default Layout;