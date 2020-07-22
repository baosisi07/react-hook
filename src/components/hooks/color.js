import React, { useReducer, createContext } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'update_color'

const initialSate = {
    color: 'blue'
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'update_color':
            return {color:action.color}
        default:
            return {color:state.color}
    }
}
export const Color = (props) => {
    const [state, dispatch] = useReducer(reducer, initialSate)
    return (
        <div>
        <ColorContext.Provider value={{...state,dispatch}}>
            {props.children}
        </ColorContext.Provider>
        </div>
    )
}

