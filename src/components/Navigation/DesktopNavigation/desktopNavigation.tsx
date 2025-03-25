import { pages } from "../../../data/data"
import styles from "../navigation.module.css"
import NavigationItem from "../NavigationItem/navigationItem"

const DesktopNavigation = () => {
    return (
    <div className={styles.desktopMenu}>
        {pages.map((page, index) => (
            <NavigationItem name={page} />
        ))}
    </div>
    )
}

export default DesktopNavigation