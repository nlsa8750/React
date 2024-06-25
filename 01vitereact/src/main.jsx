import React from 'react'
import ReactDOM from 'react-dom/client'
//function hai alag page main
import App from './App.jsx'

function MyApp() {
  return (
    <div><h1>Function hai jo alag jsx file main hai</h1></div>
    
  )  
}

// myapp jaisa normal function jo usually react ko samaj nahi aata hai usko parse karke jsx format main likhte hai toh woh aise dikhta hai
// niche dekho = jis format main niche likha hai, react waise samajta hai 

// par yeh kaam nahi kar raha 
// kyu  ? = because yeh hamne banaya hai isliye syntax galat hai

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target:'_blank'

//   },
//   children: 'Click me to visit google'

// }

// chalo theek hai, galti ho gayi maaf kardo, chalo phir react ke tareeke se banake dekhte hai 

//IMPORTANT:
const anotherUser = " , Nikhil";

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

//or kya kar sakte ho
const anotherElement = (
  <a href='https://google.com' target = '_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // yeh toh jsx ka syntax hai => then how normal function is being handled => using BUNDLER
  reactElement
  // <App /> 
)
