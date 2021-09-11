import React, {useReducer, createContext, useContext, useEffect} from "react";
// import carts from './data'
import CartReducer from "./reducer";

const url = 'https://course-api.com/react-useReducer-cart-project'

const CartContext = createContext()

const initState = {
    loading: false,
    carts: [],
    amount: 0,
    total: 0
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer,initState)

    const deleteAll = () =>{
        dispatch({
            type: 'deleteAll',
            payload: null
        })
    }
    const deleteItem = (id) =>{
        dispatch({
            type: 'deleteItem',
            payload: id
        })
    }
    const up = (id) =>{
        dispatch({
            type: 'up',
            payload: id
        })
    }
    const down = (id) =>{
        dispatch({
            type: 'down',
            payload: id
        })
    }
    useEffect(()=>{
        dispatch({
            type: 'getTotal',
            payload: null
        })
    }, [state.carts])

    const fetchData = async ()=>{
        dispatch({type: 'loading'})
        const res = await fetch(url)
        const data = await res.json()
        dispatch({type: 'loaded', payload: data})
    }
    useEffect(() => {
        fetchData()
      }, [])

    const data = {
        state,
        deleteAll,
        deleteItem,
        up,
        down
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
}

export default CartProvider

const useGlobalCartContext = () =>{
    return useContext(CartContext)
}

export {useGlobalCartContext}