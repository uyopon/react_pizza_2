import React from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom';
import {  useDispatch } from 'react-redux' 

import { fetchPizzas } from './redux/actions/pizzas'


function App() {

  const dispatch = useDispatch()///////////////////////////////////////////////////////////////////////

//   React.useEffect(() => {

//     // axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))

//     // fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then((json)=>setPizzas(json.pizzas))

//     dispatch(fetchPizzas())
// }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home  />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
