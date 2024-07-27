import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import IncrementCounter from './Components/IncrementCounter';
import DecrementCounter from './Components/DecrementCounter';
import { increment, decrement } from './features/todo/todoSlice';
import './App.css'


function App() {

  const count = useSelector((state) => state.Paras.count)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>Counter Value</h1>
      <div>{count}</div>
      <IncrementCounter onIncrement = {handleIncrement}/>
      <DecrementCounter onDecrement = {handleDecrement}/>
      
    </>
  );
}

export default App;
