import Header from "./Header"
import Navigation from "./Navigation"
import Box from "./Box"

const Layout = ({title, children}) => {
    return (
        <Box display="grid" gridTemplateColumns="300px 1fr">
            <Navigation />
            <Header title={title} />
            { children }
        </Box>

    )
}

export default Layout;