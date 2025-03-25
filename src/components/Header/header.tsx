import Logo from "../Logo/logo";
import Search from "../Search/search";
import ShopCart from "../ShopCart/shopCart";
import styles from "./header.module.css"
import { pages } from "../../data/data";
import DesktopNavigation from "../Navigation/DesktopNavigation/desktopNavigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Logo />
            </div>
            <DesktopNavigation />
            <div className={styles.iconWrap}>
                <Search />
                <ShopCart />
            </div>
        </header>
    )
}

export default Header;