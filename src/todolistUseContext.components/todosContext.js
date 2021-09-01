import React, {createContext, useEffect, useReducer} from 'react'
import { TodosReducer } from './todosReducer'

export const TodosContext = createContext()

const Provider = ({children}) =>{
    const [todos, dispatch] = useReducer( TodosReducer, [])

    useEffect(() => {
        dispatch({
            type: 'get',
            payload: null
        })
    }, [])

    useEffect(()=>{
        dispatch({
            type: 'save',
            payload: {todos}
        })
    },[todos])

    const data = {
        todos,
        dispatch
    }

    return(
        <TodosContext.Provider value={data}>
            {children}
        </TodosContext.Provider>
    )
}

export default Provider