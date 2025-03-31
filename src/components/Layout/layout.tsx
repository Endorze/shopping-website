import Header from "../Header/header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;