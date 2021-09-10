import React from 'react'

const CartItem = ({id, title, price, img, amount}) => {
    return (
        <div className='cartItem'>
            <img src={img} alt={title}></img>
            <div className='content'>
                <h5>{title}</h5>
                <p>{price}$</p>
            </div>
            <div className='amount'>
                <button>+</button>
                <p>{amount}</p>
                <button>-</button>
            </div>
            <div>Remove</div>
        </div>
    )
}

export default CartItem
