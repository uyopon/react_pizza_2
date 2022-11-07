import { createStore, combineReducers,compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import filters from '../redux/reducers/filters'
import pizzas from '../redux/reducers/pizzas'
import cart from '../redux/reducers/cart'

const composeEnhancers = compose

const rootReducer = combineReducers({ //объеденяет 2 редуцера в 1
  filters,
  pizzas,
  cart
})



const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

window.store=store


//store.getState() вызов гетстате возвращает объ с 2 вызванными редусерами- объектами которые они возвращают=)

export default store