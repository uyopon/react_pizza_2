const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalPriceById:{}

}
const cart = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PIZZA_CART': {      

            const newItems = { //добавление пиццы к добавленным ранее id : [кол-во]

                ...state.items, 
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : //если нету action.payload.id

                    [...state.items[action.payload.id], action.payload],     //если есть action.payload.id (чтобы добавлть пиццы с одинаковым id)
            }

            const newTotalPriceById ={
                ...state. totalPriceById,
                [action.payload.id]: !state. totalPriceById[action.payload.id]? action.payload.price :
                state. totalPriceById[action.payload.id]+ action.payload.price

            } 


            const allPizzas = [].concat.apply([],Object.values(newItems)) //newItems = items

            const totalPrice = allPizzas.reduce((sum,obj)=>obj.price+sum,0) // 0 - initial значение sum



            return {
                ...state,

                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
                totalPriceById: newTotalPriceById


                //The concat() method is used to merge two or more arrays.

            }
        }               





        default:
            return state
    }
}

export default cart

