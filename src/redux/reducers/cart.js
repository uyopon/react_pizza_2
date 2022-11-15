const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalPriceById: {} // цена всех пиц с одинаковым id

}
const cart = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PIZZA_CART': {

            const newItems = { //добавление пиццы к добавленным ранее id : [кол-во]

                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : //если нету action.payload.id

                    [...state.items[action.payload.id], action.payload],     //если есть action.payload.id (чтобы добавлть пиццы с одинаковым id)
            }

            const newTotalPriceById = {
                ...state.totalPriceById,
                [action.payload.id]: !state.totalPriceById[action.payload.id] ? action.payload.price :
                    state.totalPriceById[action.payload.id] + action.payload.price

            }


            const allPizzas = [].concat.apply([], Object.values(newItems)) //newItems = items

            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0) // 0 - initial значение sum



            return {
                ...state,

                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
                totalPriceById: newTotalPriceById


                //The concat() method is used to merge two or more arrays.

            }
        }

        case 'CLEAR_CART':
            return { totalPrice: 0, totalCount: 0, items: {}, totalPriceById: {} };

        case 'REMOVE_CART_ITEM':

            const newItems = { ...state.items }
            delete newItems[action.payload]


            const newTotalCount = (state.totalCount - state.items[action.payload].length)

            const newTotalPrice = state.totalPrice - state.totalPriceById[action.payload]


            const newTotalPriceById = { ...state.totalPriceById }
            delete newTotalPriceById[action.payload]


            return { items: newItems, totalCount: newTotalCount, totalPrice: newTotalPrice, totalPriceById: newTotalPriceById }





        case 'MINUS_CART_ITEM':

            const newItems2 = { ...state.items }//#######@@@@@@@@$$$$$$$$$$$$

            let newTotalPrice2 = state.totalPrice//#######@@@@@@@@$$$$$$$$$$$

            let  newTotalPriceById2 = { ...state.totalPriceById }//#######@@@@@@@@$$$$$$$$$$$$$



            if (newItems2[action.payload].length === 1) {

    
                delete newItems2[action.payload]
                newTotalPrice2 =  state.totalPrice- state.items[action.payload][0].price
               
                newTotalPriceById2[action.payload] = 0

            }
            else {
                
                newItems2[action.payload].pop()
                newTotalPrice2 = ( state.totalPrice -newItems2[action.payload][0].price)
                newTotalPriceById2[action.payload] = (newTotalPriceById2[action.payload] - newItems2[action.payload][0].price) // тут ошибка
            }


            const newTotalCount2 = (state.totalCount - 1)//#######@@@@@@@@$$$$$$$$$$$

            return { items: newItems2, totalCount: newTotalCount2, totalPrice: newTotalPrice2, totalPriceById: newTotalPriceById2 }


        case 'PLUS_CART_ITEM':
            

         


            const newItems3 = { ...state.items}

            newItems3[action.payload.id].push(action.payload.obj)

            console.log('')
     



  

            const newTotalPrice3 = (state.totalPrice+ newItems3[action.payload.id][0].price)//+++++++++++++++=

            let  newTotalPriceById3 = { ...state.totalPriceById }//#######@@@@@@@@$$$$$$$$$$$$$

            newTotalPriceById3[action.payload.id] = (newTotalPriceById3[action.payload.id] + newItems3[action.payload.id][0].price)


            const newTotalCount3 = (state.totalCount + 1)//++++++++++++++++=


            return { items: newItems3, totalCount: newTotalCount3, totalPrice: newTotalPrice3, totalPriceById: newTotalPriceById3 }
  











        default:
            return state
    }
}

export default cart



