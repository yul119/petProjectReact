export const TodosReducer = (state, action) => {
    const {type, payload} = action

    switch(type){
        case 'get':
            const data = localStorage.getItem('todos')
            if(data) state = JSON.parse(data)
            return state
        case 'save':
            localStorage.setItem('todos', JSON.stringify(payload.todos))
            return state
        case 'add':
            return [...state, payload.todo]
        case 'dltAll':
            return []
        case 'remove':
            return state.filter(todo => todo.id !== payload.id)
        case 'update':
            return state.map(todo=>{
                if(todo.id === payload.id){
                    return {...todo, text: payload.newText}
                }
                return todo
            })
        default:
            return state
    }

}