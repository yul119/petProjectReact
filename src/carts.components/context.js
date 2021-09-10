import React, {useState, createContext, useContext} from "react";
import carts from './data'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [state, setState] = useState(carts)

    const data = {
        state
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