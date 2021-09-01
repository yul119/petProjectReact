import React, {useState, useContext} from 'react'
import { ButtonToggle } from "reactstrap";
import './style.css'

import Todo from './Todo.js'
import { TodosContext } from './todosContext';

const TodoApp = () =>{
    const {todos, dispatch} = useContext(TodosContext)

    const [text, setText] = useState('')
    const [isEdit, setEdit] = useState(false)
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text === ''){
            alert('Notthing to add!')
        } else if(isEdit){
            confirmEditTodo(editId, text)
            setEdit(false)
            setEditId(null)
            setText('')
        }
        else{
            addTodo()
            setText('')
        }
    }

    const addTodo = () =>{
        dispatch({
            type: 'add',
            payload:{
                todo:{
                    id: new Date().getTime().toString(),
                    text
                }
            }
        })
    }

    const removeTodo = (id) =>{
        dispatch({
            type: 'remove',
            payload: {
                id
            }
        })
    }

    const removeAll = () =>{
        dispatch({
            type: 'dltAll',
            payload: null
        })
    }

    const editTodo = (id) =>{
        const e = todos.find(todo=> todo.id === id)
        setText(e.text)
        setEditId(e.id)
        setEdit(true)
    }
    
    const confirmEditTodo = (id ,newText) =>{
        dispatch({
            type: 'update',
            payload: {
                id,
                newText
            }
        })
    }

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
                todos.map(todo => {
                    return <Todo todo = {todo} removeTodo={removeTodo} editTodo={editTodo}/>
                })
            }
            <ButtonToggle className='dltbtn' color="danger" onClick={removeAll}>Clear All</ButtonToggle>
        </div>
    )
}

export default TodoApp