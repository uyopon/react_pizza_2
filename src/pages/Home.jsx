import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'
import IsLOading from '../components/PizzaBlock/isLoading'
import { fetchPizzas } from '../redux/actions/pizzas'


const theCategories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']

const theItems =  [{ name: 'популярности', type: 'popular' },
{ name: 'цене', type: 'price' },
{ name: 'алфавиту', type: 'alphabet' }]

function Home() {

  const pizzas = useSelector((state) => state.pizzas.items)/// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)

  console.log(pizzas)

  const isLoaded = useSelector((state) => state.pizzas.isLoaded) /// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)

  const {category,sortBy} = useSelector(({filters}) => filters) /// оформить пдписку на хранилище (если state изменилось useSeletor получает новые данные и делает ререндер)


  console.log(category,sortBy )


  const dispatch = useDispatch()

  React.useEffect(() => {

    // axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))

    // fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then((json)=>setPizzas(json.pizzas))

    dispatch(fetchPizzas())


  }, [category])


  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    }, []
  )

  return (
    <div className="container">
      <div className="content__top">

        <Categories items={theCategories} onSelectCategory={onSelectCategory} activeItem={category} />  

        <SortPopup  items={theItems} sortBy={sortBy} />  

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoaded ? pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj}  />) :
         Array(10).fill(0).map((_,index)=><IsLOading key={index}/>)}

    
      </div>
    </div>
  )
}

export default Home