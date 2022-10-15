import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock'

function Home({pizzas}) {
  console.log(pizzas)
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />


      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />

      </div>
    </div>
  )
}

export default Home