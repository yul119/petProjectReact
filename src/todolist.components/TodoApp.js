import React, {useState, useEffect} from 'react'
import { ButtonToggle } from "reactstrap";
import './style.css'

import Todo from './Todo.js'

const TodoApp = () =>{
    const getList = ()=>{
        const list = localStorage.getItem('list')
        if(list){
            return JSON.parse(list)
        }
        return []
    }

    const [text, setText] = useState('')
    const [list, setList] = useState(getList())
    const [isEdit, setEdit] = useState(false)
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text == ''){
            alert('Notthing to add!')
        } else if(isEdit){
            setList(list.map(todo =>{
                if(todo.id === editId){
                    return {...todo, text}
                }
                return todo 
            }))
            setEdit(false)
            setEditId(null)
            setText('')
        }
        else{
            setList([...list,{id:new Date().getTime().toString(), text}])
            setText('')
        }

    }

    const removeTodo = (id) =>{
        setList(list.filter(todo=> todo.id !== id))
    }

    const editTodo = (id) =>{
        setEdit(true)
        setEditId(id)
        const a = list.find(todo=> todo.id ===id)
        setText(a.text)
    }

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return(
        <div className = 'container'>
            <div className='header'>
                <h1>
                   <span>/ </span>Basic TodoList
                </h1>  
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
                <button type='submit' color="primary">{isEdit ? 'Edit' : 'Submit'}</button>
            </form>
            {
                list.map(todo => {
                    return <Todo todo = {todo} removeTodo={removeTodo} editTodo={editTodo}/>
                })
            }
            <ButtonToggle className='dltbtn' color="danger" onClick={()=>setList([])}>Clear All</ButtonToggle>
        </div>
    )
}

export default TodoApp