import styles from "./productCard.module.css"

type Props = {
    imgPath: string,
    name: string,
    price: number,
    desc: string
}

const ProductCard = ({imgPath, name, price, desc} : Props) => {
    return (
        <div className={styles.card}>
            <img src={imgPath} />
            <p>{name}</p>
            <p>$ {price}</p>
        </div>
    )
}

export default ProductCard;