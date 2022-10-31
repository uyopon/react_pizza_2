import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'


const theCategories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']

const theItems =  [{ name: 'популярности', type: 'popular' },
{ name: 'цене', type: 'price' },
{ name: 'алфавиту', type: 'alphabet' }]

function Home() {

  


  const pizzas = useSelector((state) => state.pizzas.items)///////////// оформить пдписку на хранилище (если state изменилось => useSeletor получает новые данные и делает ререндер)

  const dispatch = useDispatch()


  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    }, []
  )

  return (
    <div className="container">
      <div className="content__top">

        <Categories items={theCategories} onSelectCategory={onSelectCategory} />  

        <SortPopup items={theItems} />


      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {pizzas && pizzas.map((obj, index) => <PizzaBlock key={obj.id} {...obj} />)}

      </div>
    </div>
  )
}

export default Home