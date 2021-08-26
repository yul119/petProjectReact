import React, {useState} from 'react'
import './style.css'
import people from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const Reviews = () => {
    const [index, setIndex]= useState(3)

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
            <div className='body'>
                <div className='icon'><VscArrowLeft onClick={prev}/></div>
                {
                    people.map((person,i)=>{
                        let position = 'lastSlide'
                        if(i==index){
                            position = 'activeSlide'
                        }
                        if(i==index+1||(i==people.length-1 && index==0)){
                            position = 'nextSlide'
                        }
                        const classname = `reviews ${position}`

                        return  (<div className={classname} >
                            <div className='image'>
                                <img src={person.image} alt={person.name} />
                                <FaQuoteRight />
                            </div>
                            <div className='content'>
                                <p className='name'>{person.name}</p>
                                <p className='job'>{person.job}</p>
                                <p className='text'>{person.text}</p>
                            </div>
                        </div>)
                    })
                }
                <div className='icon'><VscArrowRight onClick={next}/></div>
                
            </div>
        </div>
    )
}

export default Reviews
