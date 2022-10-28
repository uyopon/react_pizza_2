import { createStore, combineReducers,compose,applyMiddleware } from 'redux'

import filtersReducer from './reducers/filters'
import pizzasReducer from './reducers/pizzas'



const rootReducer = combineReducers({ //объеденяет 2 редуцера в 1
  filters:filtersReducer,
  pizzas:pizzasReducer
})



const store = createStore(rootReducer)


window.store = store

//store.getState() вызов гетстате возвращает объ с 2 вызванными редусерами- объектами которые они возвращают=)

export default store