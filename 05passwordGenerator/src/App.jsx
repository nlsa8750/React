import { useState , useCallback, useEffect, useRef} from 'react'
// import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // create this because you can check that this much of text is copied from clipboard i.e. left click + shift key (select)
  const passwordRef = useRef(null)

  // to cache a function and it's dependencies to optimize it = memoization
  const passwordGenerator = useCallback(() => {

    // this password will be displayed
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*(){}[]<>/:;'"

    for(let i = 0 ; i < length ; i++)
      {
        // random index
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }

      setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  // agar kisi bhi parameter main chedd chad ho rahi hai toh passwordgenerator() ko phirse run karo
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed])

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-lg rounded-md px-4 my-10 py-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow-lg rounded-md overflow-hidden mb-4'>
        <input 
        type='text' 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref = {passwordRef}
         ></input>
         <button className='bg-blue-600 text-white px-2'
         onClick={copyPasswordToClipboard}>COPY</button> 
      </div>
      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-2'>
          <input
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}
          ></input>
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1 mx-3'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          ></input>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          ></input>
          <label>Characters</label>
        </div>
      </div>
      </div>

    </>
  );
}

export default App
