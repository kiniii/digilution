import Header from "./Header"
import Navigation from "./Navigation"


const Layout = ({title, children}) => {
    return (
        <div>
            <Header title={title}/>
            <Navigation />
            { children }
        </div>

    )
}

export default Layout;