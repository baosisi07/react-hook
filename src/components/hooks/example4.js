// useReducer的应用
import React, {useReducer} from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return {count: state.count + 1}
        case 'sub':
            return {count: state.count - 1}
        default:
            return {count: state.count}
    }
}

function Example4() {
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <p>count value is {state.count}</p>
            <button onClick={() => {dispatch({type:'add'})}}>增加</button>
            <button onClick={() => {dispatch({type:'sub'})}}>减少</button>
        </div>
    )
}

export default Example4