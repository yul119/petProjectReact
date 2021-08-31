import React,{useState} from 'react'
import './style.css'
import { BsTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

const Todo = ({todo, removeTodo, editTodo}) => {

    return (
         <div className='todo'>
            <p>{todo.text}</p>
            <FaEdit className='icon' onClick={()=>editTodo(todo.id)}/>
            <BsTrashFill className='icon' onClick={()=>removeTodo(todo.id)}/>
        </div>
    )
}

export default Todo
