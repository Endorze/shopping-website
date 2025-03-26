import { useState } from 'react'
import Header from './components/Header/header'
import styles from "./components/CategoryTile/categoryTile.module.css"
import { categoryInfo } from './data/clothes'
import CategoryTile from './components/CategoryTile/categoryTile'


function App() {

  return (
    <>
      <Header />
      <div className={styles.categoryTileContainer}>
        {categoryInfo && categoryInfo.map((item, index) => (
          <CategoryTile key={index} {...item} />)
        )}
      </div>
    </>
  )
}

export default App
