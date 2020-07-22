// useContext 父子组件传值

import React, {useState, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}
function Example3() {
    let [count,setCount] = useState(0)
    return(
        <div>
            <p>hello, you have clicked {count} times</p>
            <button onClick= {() => {setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example3

