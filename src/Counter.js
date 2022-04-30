import React, {useState, useReducer} from 'react'

function Counter() {

    const type = {
        increments : 'increments',
        decrements: 'decrements',
        reset:'reset'
    }
    const reducer =(state, action)=>{
        switch (action.type){
            case 'increments':
                return state +1
            case 'decrements':
                return state -1
        
            case 'reset':
                return 0
            default:
                return state
        }
    }
    
    const [counter, dispatch] = useReducer(reducer, 4)
  return (
    <div>
    <h1>{counter}</h1>
        <button onClick={()=>dispatch({type: type.increments})}>Increments</button>
        <button onClick={()=>dispatch({type:type.decrements})}>Decrements</button>
        <button onClick={()=>dispatch({type:type.reset})}>Reset</button>
    </div>
  )
}

export default Counter