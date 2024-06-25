import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let Arjun = {
    handsome: 10,
    cute: 10,
    coder : 10,
    skills : 11,
    hair: 0
  }

  let arr = [1,2,3,59]

  return (
    <>
    <h1 className='bg-sky-900 text-white p-6 rounded-xl mb-2'> TAILWIND TEST </h1>
    <Card handsome="Shubham Library" btnText = "Click me" desc="I love studying in depth and I own a new scooty, thanks to dad's money"></Card>
    <Card handsome ="Paras Singhal" btnText = "Click here" desc = "I don't have enough hair in my head, so that's why Suman call me uncle."></Card>
    </>
  )
}

export default App
