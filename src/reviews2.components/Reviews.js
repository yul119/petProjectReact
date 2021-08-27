import React, {useState} from 'react'
import './style.css'
import people from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const Reviews = () => {
    const [index, setIndex]= useState(0)

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
                <div className='reviews'>
                    {
                        people.map((person,i)=>{
                            let posi = 'lastSlide'
                            if(i===index) posi = 'activeSlide'
                            if(i===index+1||(index===people.length-1 && i===0)){
                                posi = 'nextSlide'
                            }

                            const cn = `a ${posi}`

                            return  (<div className={cn}>
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
                </div>

                <div className='icon'><VscArrowRight onClick={next}/></div>
                
            </div>
        </div>
    )
}

export default Reviews
