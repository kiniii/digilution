import Header from "./Header"
import Navigation from "./Navigation"

const Layout = ({title}) => {
    return (
        <div className = "container">
            <Header title={title}/>
            <Navigation />
        </div>
    )
}

export default Layout;