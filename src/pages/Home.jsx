import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import IsLOading from '../components/PizzaBlock/isLoading'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'




const theCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const theItems = [{ name: 'популярности', type: 'popular', order: 'desc' },
{ name: 'цене', type: 'price', order: 'desc' },
{ name: 'алфавиту', type: 'name', order: 'asc' }]

function Home() {

  const pizzas = useSelector(({pizzas}) => pizzas.items)/// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)

  const cartItems = useSelector(({cart}) => cart.items) //= свойство id : массив с объектами пицц


  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded) /// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)

  const { category, sortBy } = useSelector(({ filters }) => filters) /// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)





  const dispatch = useDispatch()

  React.useEffect(() => {

    // axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))

    // fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then((json)=>setPizzas(json.pizzas))

    dispatch(fetchPizzas(category, sortBy))


  }, [category, sortBy])


  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    }, []
  )

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type))
    }, []
  )
  const onClickAddPizza = React.useCallback(
    (type) => {
      dispatch(addPizzaToCart(type))
    }, []
  )
  

  return (
    <div className="container">
      <div className="content__top">

        <Categories items={theCategories} onSelectCategory={onSelectCategory} activeItem={category} />

        <SortPopup items={theItems} sortBy={sortBy.type} onSelectSortType={onSelectSortType} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoaded ? pizzas.map((obj) => <PizzaBlock key={obj.id} cartItems={cartItems[obj.id]&& cartItems[obj.id].length} onClickAddPizza={onClickAddPizza} {...obj} />) :
          Array(4).fill(0).map((_, index) => <IsLOading key={index} />)}


      </div>
    </div>
  )
}

export default Home