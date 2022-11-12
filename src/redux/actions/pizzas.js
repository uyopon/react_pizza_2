import axios from "axios"

export const setLoaded = (payload) => {
    return (
        { type: 'SET_LOADED', payload }
    )
}

export const fetchPizzas = (category, sortBy) => (dispatch) => { //fetch -  принести данные используют в контексте обращения к серверу

    dispatch(setLoaded(false))

    axios.get(
        `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`
    ).then(({ data }) => {

        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => {
    return (
        { type: 'SET_PIZZAS', payload: items }
    )
}