import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // store - объект c методами redux'a

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>

      <Provider store={store}>

        <App />
        
      </Provider>

    </BrowserRouter>

  </React.StrictMode>

);

// z я
// cd react_pizza_2
// !
// c
// Z



