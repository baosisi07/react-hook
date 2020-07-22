// useState和useEffect的使用
import React, {useState, useEffect} from 'react';

function Example1() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>you have clicked {count} times</p>
      <button onClick={() => {setCount(count+1)}}>点击</button>
    </div>
  );
}

export default Example1;