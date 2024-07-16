import { useState } from 'react'

function App() {

  let [color, setColor] = useState("White")

  function red() {
    color = "Red"
    setColor(color)
  }

  function yellow() {
    color = "Yellow"
    setColor(color)
  }

  function green() {
    color = "Green"
    setColor(color)
  }

  function blue() {
    color = "Blue"
    setColor(color)
  }

  function orange() {
    color = "Orange"
    setColor(color)
  }

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-3 rounded-2xl mx-2">
          <button onClick={red} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'red', color: 'white'}}>Red</button></div>
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-3 rounded-2xl mx-2">
          <button onClick={yellow} className='outline-none px-3 rounded-2xl' style={{backgroundColor:'yellow', color: 'black' }}>Yellow</button></div>
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-3 rounded-2xl mx-2">
          <button onClick={green} className='outline-none px-3 rounded-2xl'style={{backgroundColor:'green', color: 'white'}}>Green</button></div>
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-3 rounded-2xl mx-2">
          <button onClick={blue} className='outline-none px-3 rounded-2xl'style={{backgroundColor:'blue', color: 'white'}}>Blue</button></div>
          <div className="flex flex-wrap gap-3 shadow-2xl bg-white px-3 py-3 rounded-2xl mx-2">
          <button onClick={orange} className='outline-none px-3 rounded-2xl'style={{backgroundColor:'orange', color: 'white'}}>Orange</button></div>
                  
        </div>
      </div>
    </>
  )
}

export default App
