import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // value inject kardi 
  // let counter = 5;

  let [counter, setCounter] = useState(5);

  let addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("clicked", counter);
  }

let removeValue = () => {
  counter = counter - 1;
  setCounter(counter);
  console.log("clicked", counter);
}

  return (
    <>
    <h1>React and Vite code</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
