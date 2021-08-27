import React, {useState, useEffect} from 'react'
import './style.css'
import { Container, Row, Col, Button } from 'reactstrap';

import Food from './Food'
import data from './data'

const Menu = () => {
    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState('all')

    let arr = ['all']
    for(let i=0; i< data.length; i++){
        if(!arr.includes(data[i].category))
            arr.push(data[i].category)
    }

    useEffect(()=>{
        if(category==='all') {
            setMenu(data)
            return
        }
        setMenu(data.filter(food=> food.category == category))
        
    },[category])

    return (
        <Container>
            <Row>
                <Col>
                    <div className='header'>
                        <h2>Our Menu</h2>
                        <div className='underline'></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className='buttons'>
                    {
                        arr.map(btn=> <button onClick={()=>setCategory(btn)}><p>{btn}</p></button>)
                    }
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    menu.map(food => {
                        return(
                            <Col sm='6'><Food data={food} /></Col>
                    )})
                }
            </Row>
        </Container>
    )
}

export default Menu


