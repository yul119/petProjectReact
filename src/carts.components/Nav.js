import React, { useState } from 'react';
import {Navbar} from 'reactstrap';
import { useGlobalCartContext } from './context';
import icon from './shopping-cart.png'

const Header = (props) => {

  const {state} = useGlobalCartContext()

  return (
    <div className='flex'>
        <h1>Context/Reducer</h1>
        <div>
            <img src={icon} alt='icon' className='icon'/>
            <div className='count'>{state.amount}</div>
        </div>
    </div>
  );
}

export default Header;