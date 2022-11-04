import axios from "axios"

export const setLoaded  = (payload) => {
    return (
        {type: 'SET_LOADED',payload}
    )
}

export const fetchPizzas = () =>(dispatch)=> { //fetch -  принести данные используют в контексте обращения к серверу
    
    dispatch(setPizzas(false))

    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => {
    return (
        {type: 'SET_PIZZAS',payload: items}
    )
}