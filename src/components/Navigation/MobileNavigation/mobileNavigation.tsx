import styles from "../navigation.module.css"
import { List } from "@phosphor-icons/react/dist/ssr";
import { pages } from "../../../data/data";
import NavigationItem from "../NavigationItem/navigationItem";
import { useState } from "react";

const MobileNavigation = () => {

    const [showMenu, setShowMenu] = useState("inactive");

    const handleClick = () => {
        setShowMenu(showMenu === "inactive" ? "active" : "inactive");
    }

    return (
        <div className={styles.mobileMenu}>
            <List size={32} onClick={handleClick} />

            <div className={`${styles.mobileMenuContent} ${styles[showMenu]}`}>
                {pages.map((page, index) => (
                    <NavigationItem name={page} key={index} />
                ))}
            </div>

        </div>
    )
}

export default MobileNavigation;