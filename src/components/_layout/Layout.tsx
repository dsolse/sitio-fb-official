import { PropsWithChildren} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const routes = [
    {route: "Home", id: "#hero"},
    {route: "About us", id: "#about"},
    {route: "Services", id: "#services"},
    {route: "Portafolio", id: "#portafolio"},
    {route: "Team", id: "#team"},
    {route: "Contact us", id:"#contact"}
]  

const Layout = ({children} : PropsWithChildren) => {
    return (
        <div className="grid grid-template-rows-layout grid-cols-1 min-h-screen">
            <Navbar routes={routes}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;