import { NavLink } from "react-router-dom"
import styles from "../navigation.module.css"

type Props = {
    name: string
}

const NavigationItem = ({ name }: Props) => {
    return (
        // <NavLink to={name.toLowerCase() === "home" ? "/" : name.toLowerCase()} className={styles.menuItem}>
        //     {name}
        // </NavLink>

        <NavLink to={name.toLowerCase() === "home" ? "/" : name.toLowerCase()} className = {({ isActive }) =>
        isActive ? "active" : ""}>
        {name}
        </NavLink>
        
    )
}

export default NavigationItem;