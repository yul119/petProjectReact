import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='nav'>
            <div>
                <h1>Cocktails</h1>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}

export default Header
