import React from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart'
import {Routes, Route } from 'react-router-dom';
import axios from 'axios'

function App(){

  const  [pizzas , setPizzas] = React.useState([]) //пиццы с сервера

  

  React.useState(()=>{

    axios.get('http://localhost:3000/db.json').then(({data})=> setPizzas(data.pizzas))

    // fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then((json)=>setPizzas(json.pizzas))
    
  },[])
  

  return (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Routes>
        <Route exact path='/' element={<Home pizzas= {pizzas}  />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  </div>
)
}


export default App;
