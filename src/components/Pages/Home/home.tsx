import styles from "../../CategoryTile/categoryTile.module.css"
import { categoryInfo, newProducts } from '../../../data/clothes'
import CategoryTile from '../../CategoryTile/categoryTile'




const Home = () => {
    return (
        <>
        <div className={styles.categoryTileContainer}>
          {categoryInfo && categoryInfo.map((item, index) => (
            <CategoryTile key={index} {...item} />)
          )}
        </div>

        <div>
            <h3>New Products</h3>
           
            {newProducts.map((item, index) => (
                <div>
                     <img src={`images/${item.image_url}`}/>
                    <p>{item.name} {item.price}$</p>
                </div>
                ))}
        </div>
        </>
    )
}

export default Home;