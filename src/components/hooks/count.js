import React, {
    createContext, useContext
} from 'react'
const CountContext = createContext()
function Counter() {
    const count = useContext(CountContext)
     return (<h2>{count}</h2>)
}
export default Counter