import React from 'react'
import CartItem from './CartItem'
import Header from './Nav'
import './style.css'
import { useGlobalCartContext } from './context'
import Loading from './../Loading'

const Carts = () => {
    const {state, deleteAll} = useGlobalCartContext()

    if(state.loading){
        return <Loading />
    }

    return (
        <div>
            <Header />
            <br />
            {
                state.carts.length===0? <div>Empty Cart</div>: 
                <>
                {
                    state.carts.map(item => <CartItem {...item}/>)
                }
                <br />
                <hr style={{'width': '700px', 'margin': 'auto'}}/>
                <div className='total   '>
                    <h3>Total</h3>
                    <p>{state.total}$</p>
                </div>
                <div onClick={deleteAll} className='deleteAll'>CLEAR ALL CARTS</div>
                </>
            }
        </div>
    )
}

export default Carts
