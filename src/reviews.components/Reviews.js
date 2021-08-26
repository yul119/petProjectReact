import React, {useState} from 'react'
import './style.css'
import people from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const Reviews = () => {
    const [index, setIndex]= useState(0)

    const {id, name, job, image, text} = people[index]

    const changeNum= (num) =>{
        if(num<0){
            return people.length-1
        }
        if(num > people.length-1){
            return 0
        }
        return num
    }

    const prev = () =>{
        setIndex(changeNum(index-1))
    }
    
    const next = () =>{
        setIndex(changeNum(index+1))
    }

    return (
        <div className='containers'>
            <div className='header'>
                <h1>
                   <span>/ </span>Reviews 
                </h1>  
            </div>
            <div className='reviews'>
                <div className='image'>
                    <img src={image} alt={name} />
                    <FaQuoteRight />
                </div>
                <div className='content'>
                    <p className='name'>{name}</p>
                    <p className='job'>{job}</p>
                    <p className='text'>{text}</p>
                </div>
                <div className='changePerson'>
                    <VscArrowLeft onClick={prev}/>
                    <VscArrowRight onClick={next}/>
                </div>
            </div>

        </div>
    )
}

export default Reviews
