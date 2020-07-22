import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div className="App">
      <p>you have clicked {count} times</p>
      <button onClick={() => {setCount(count+1)}}>点击</button>
    </div>
  );
}

export default App;



