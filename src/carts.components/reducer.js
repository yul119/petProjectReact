import { useReducer } from "react";

const CartReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case 'up':
            const currentCart1 = state.carts.map(cart=>{
                if(cart.id === payload){
                    return {...cart, amount: cart.amount+1}
                }
                return cart
            })
            return {...state, carts: currentCart1} 
        case 'down':
            const currentCart2 = state.carts.map(cart=>{
                if(cart.id === payload){
                    let currentAmount = cart.amount-1
                    if(currentAmount < 1) currentAmount = 1
                    return {...cart, amount: currentAmount}
                }
                return cart
            })
            return {...state, carts: currentCart2} 
        case 'deleteItem':
            const currentCart = state.carts.filter(cart => cart.id !== payload)
            return {...state,carts: currentCart}
        case 'deleteAll':
            return {...state, carts: []}
        case 'getTotal':
            let {total, amount} = state.carts.reduce(
                (init,cart)=>{
                    init.amount += cart.amount
                    init.total += cart.amount*cart.price
                    return init
                },
                {
                    total: 0, 
                    amount: 0
                }
            )
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        case 'loading':
            return {...state, loading: true}
        case 'loaded':
            return {...state, loading: false, carts: payload}
        default:
            return state
    }

}

export default CartReducer