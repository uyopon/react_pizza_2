import React from 'react';
import Header from './components/Header'
import Categories from './components/Categories'
import SortPopup from './components/SortPopup';
import Home from './pages/Home';
import Cart from './pages/Cart'
import {Routes, Route } from 'react-router-dom';





function App(){

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
