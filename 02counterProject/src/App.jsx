import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  function increaseValue(){
    if(count>=20){
      setCount(20);
    }
    else{
      setCount(count+1);
    }
  }

  function decreaseValue(){
    if(count<=0){
      setCount(0);
    }
    else{
      setCount(count-1);
    }
  }
  return (
    <>
     <h1> Counter Project</h1>
     <p>Count: {count}</p>
     <button onClick={increaseValue}>Increase Value</button>
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
