import React from 'react'
import { useGlobalCartContext } from './context'

const CartItem = ({id, title, price, img, amount}) => {
    const {deleteItem, up, down} = useGlobalCartContext()

    return (
        <div className='cartItem'>
            <img src={img} alt={title}></img>
            <div className='content'>
                <h5>{title}</h5>
                <p>{price}$</p>
            </div>
            <div className='amount'>
                <button onClick={()=>up(id)}>+</button>
                <p>{amount}</p>
                <button onClick={()=>down(id)}>-</button>
            </div>
            <div onClick={()=>deleteItem(id)}>Remove</div>
        </div>
    )
}

export default CartItem
