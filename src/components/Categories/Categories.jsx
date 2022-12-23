import React from 'react'
import CategoryCard from './CategoryCard'
import CategoriesCSS from'./Categories_styles.module.css'

function Category() {

  const Categories = [{
    action: "Transfer",
    amount: "50204"
  },{
    action: "Sinpe",
    amount: "30444"
  },{
    action: "Shopping",
    amount: "18976"
  }]

  return (
    <div className={CategoriesCSS.father}>
      <div className={CategoriesCSS.title}>
          <h3>Categories</h3>
          <span className={CategoriesCSS.more}>
              more
          </span>
      </div>
      <div className={CategoriesCSS.container}>
          {Categories.map((category,index)=>{
            return (
              <CategoryCard 
              icon={index} 
              action={category.action} 
              amount={category.amount}
              key={index}
              />
            )
          })}
      </div>
  </div>
  )
}

export default Category