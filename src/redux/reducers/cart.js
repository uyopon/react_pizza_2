const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
const cart = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PIZZA_CART': {      //[]  -динамический ключ в объекте

            const newItems = { //добавление пиццы к добавленным ранее id : [кол-во]



                ...state.items, 
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : //если нету action.payload.id

                    [...state.items[action.payload.id], action.payload],     //если есть action.payload.id (чтобы добавлть пиццы с одинаковым id)

                    //[]используютя 3 разными способами : 1) динамический ключ свойства 2) создание array 3)

            }

            const allPizzas = [].concat.apply([],Object.values(newItems)) //newItems = items
            const totalPrice = allPizzas.reduce((sum,obj)=>obj.price+sum,0) // 0 - initial значение sum

            return {
                ...state,

                items: newItems,
                totalCount: allPizzas.length,
                totalPrice

                //The concat() method is used to merge two or more arrays.



                // нужно превратить (объект newItems) в массив. объект newItems хранянит :ключи индексы и знчения: массивы c объектами-пиццами
                
                //1)создаем новый массив и вызываем метод concat
            }
        }               





        default:
            return state
    }
}

export default cart

