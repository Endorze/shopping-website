import styles from "../navigation.module.css"

type Props = {
    name: string
}

const NavigationItem = ({name}: Props) => {
    return (
        <div className={styles.menuItem}>
            {name}
        </div>
    )
}

export default NavigationItem;