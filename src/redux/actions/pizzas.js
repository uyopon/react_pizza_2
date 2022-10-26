export const setLoaded  = (payload) => {
    return (
        {type: 'SET_LOADED',payload}
    )
}



export const setPizzas = (items) => {
    return (
        {type: 'SET_PIZZAS',payload: items}
    )
}