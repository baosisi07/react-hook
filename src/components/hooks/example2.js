// useEffect实现componentWillUnmount
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log(`哈喽 来啦 index`)
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  },[])
  return (
    <div>首页</div>
  )
}

function List() {
  useEffect(() => {
    console.log(`哈喽 来啦 list`)
  })
  return (
    <div>列表页</div>
  )
}

function Example2() {
  const [count, setCount] = useState(0);
  //---关键代码---------start-------
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log('老弟，你走了!app')
    }
  },[count])
  //---关键代码---------end-------

  return (
    <div>
      <p>You clicked {count} times hhh</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <Router>


      <ul>
        <li><Link to ='/'>首页</Link></li>
        <li><Link to='/list'>列表页</Link></li>
      </ul>
        <Route path='/' exact component={Index}></Route>
      <Route path='/list' component={List}></Route>
      </Router>
    </div>
  )
}
export default Example2;