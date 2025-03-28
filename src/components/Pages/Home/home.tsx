import styles from "../../CategoryTile/categoryTile.module.css"
import { categoryInfo, newProducts } from '../../../data/clothes'
import CategoryTile from '../../CategoryTile/categoryTile'
import ProductCard from "../../ProductCard/productCard"
import ProductLayout from "../../ProductLayout/productLayout"




const Home = () => {
    return (
        <>
            <div className={styles.categoryTileContainer}>
                {categoryInfo && categoryInfo.map((item, index) => (
                    <CategoryTile key={index} {...item} />)
                )}
            </div>
            <div className="new-products">
            <h3 className="new-products-title">New Products</h3>

                {newProducts.map((item, index) => (
                    <ProductCard imgPath={`images/${item.image_url}`} name={item.name} price={item.price} desc={item.description} />
                ))}
            </div>
        </>
    )
}

export default Home;