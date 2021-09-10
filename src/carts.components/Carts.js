import React from 'react'
import CartItem from './CartItem'
import Header from './Nav'
import './style.css'
import { useGlobalCartContext } from './context'

const Carts = () => {
    const {state} = useGlobalCartContext()

    return (
        <div>
            <Header />
            <br />
            {
                state.map(item => <CartItem {...item}/>)
            }
            <br />
            <hr style={{'width': '700px', 'margin': 'auto'}}/>
            <div className='total   '>
                <h3>Total</h3>
                <p>0$</p>
            </div>

            <div>CLEAR ALL CARTS</div>
        </div>
    )
}

export default Carts
