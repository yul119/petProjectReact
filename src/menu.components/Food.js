import React from 'react'
import './style.css'

const Food = ({data}) => {
    return (
        <div className='food'>
            <img src='https://thucthan.com/media/2018/07/beefsteak/cach-lam-beefsteak.jpg' />
            <div className='content'>
                <div className='tit'>
                    <h4>{data.title}</h4>
                    <p>{data.price}$</p>
                </div>
                <div className='desc'>
                    <p>{data.desc}</p>    
                </div>
            </div>
        </div>
    )
}

export default Food
