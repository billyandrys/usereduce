import React, {useReducer, useState} from 'react'

const initialState = [
    {id:1, title:'Todo # 1'},
    {id:2, title:'Todo # 2'}
  ]
const type = {
    delete:'delete',
    add:'add',
    update:'update'
}

const reducer = (state, action)=>{
    switch(action.type){
        case type.delete:
            return state.filter((todo)=>todo.id !== action.payload)
        case type.add:
            return [...state, action.payload]
        case type.update:
            return state.map(todo=>todo.id === action.payload.id ? action.payload : todo)
        
            
        default:
            return state
    }
}

function AppTodo() {
    const [todos, dispatch] = useReducer(reducer, initialState)
    const [text, setTodo] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:type.add, payload:{id:Date.now(), title:text}})
        

    }

  return (
    <div>
            <h1>TodoApp</h1>
            <ul>
            {todos.map((todo)=>
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={()=>dispatch({type:type.delete, payload:todo.id})}>delete</button>
                    <button onClick={()=>dispatch({type:type.update, payload:{...todo, title:text}})}>update</button>
                </li>
            )}
                
            </ul>
            <form onSubmit={handleSubmit}>
                <input  value={text} onChange={e=>setTodo(e.target.value)}/>
               
            </form>
    </div>
  )
}

export default AppTodo