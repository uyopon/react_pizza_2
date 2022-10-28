const initialState = {
    items:[],
    isLoaded: false
}
const pizzas = (state = initialState,action)=> {

    
    switch (action.type) {
        case 'SET_PIZZAS': 

            return { 
                ...state,           //////оператор spread развертывает объект и достает все знчения изнутри . сам объект не меняется
                items:action.payload,
                isLoaded: true

             }


        case 'SET_LOADED': 
            return { 
            ...state, 
            isLoaded: action.payload
         }
             

        
        default:
            return state
    }
}

export default pizzas