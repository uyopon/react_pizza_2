import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock'
import { useSelector } from 'react-redux'

function Home() {

  const {pizzas} = useSelector((state) => {///////////// оформить пдписку на хранилище (если state изменилось => useSeletor получает новые данные и делает ререндер)
    return {
      pizzas: state.pizzas.items
    }
  })
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']} />

        <SortPopup items={[{name:'популярности',type:'popular'},
        {name:'цене',type:'price'},
        {name:'алфавиту',type:'alphabet'}]} />


      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {pizzas && pizzas.map( (obj,index) => <PizzaBlock key={obj.id} {...obj}/>)}

      </div>
    </div>
  )
}

export default Home