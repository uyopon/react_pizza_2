export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
  });
  
  export const clearCart = () => ({  // все пиццы
    type: 'CLEAR_CART',    
  });
  
  export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
  });
  
  export const plusCartItem = (id,obj) => ({
    type: 'PLUS_CART_ITEM',
    payload: {id,obj}
  });
  
  export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
  });