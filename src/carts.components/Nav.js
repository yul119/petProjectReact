import React, { useState } from 'react';
import {Navbar} from 'reactstrap';
import icon from './shopping-cart.png'

const Header = (props) => {

  return (
    <div className='flex'>
        <h1>Context/Reducer</h1>
        <div>
            <img src={icon} alt='icon' className='icon'/>
            <div className='count'>1</div>
        </div>
    </div>
  );
}

export default Header;