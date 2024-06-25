import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  function addvalue() {
    if(counter < 10) {
    counter = counter + 1;
    setCounter(counter)
    }
  }

  function removevalue() {
    if(counter > 0)
      {
        counter = counter - 1;
        setCounter(counter)
      }
    }

    // display to the webpage
  return (
    <>
    <h1>Using Counter Project using Vite and React</h1>
    <h2>Count Value : {counter}</h2>

    <button onClick={addvalue}>Add Value</button>
    <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
