import { useEffect, useState } from 'react'

function App() {

  const [pass, setPass] = useState('');
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [copy, setCopy] = useState('')
  const [length, setLength] = useState('10');

  useEffect(() => {
    const generatePassword = () => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pswd = ""

      if (numAllowed) str += "0123456789"
      if (charAllowed) str += "~!@#$%^&*(){}[]"

      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * str.length + 1)
        pswd += str.charAt(index)
      }

      setPass(pswd)

    };
    generatePassword();

  }, [numAllowed, charAllowed, length])



  return (
    <>
      <div style={{ backgroundImage: 'url(https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundColor: 'black', color: 'yellow', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="w-full max-w-lg bg-gray-500 rounded-2xl p-8">
          <div className='text-center text-lg mb-4'>PASSWORD GENERATOR</div>
          <div className='display-flex mb-6'>
            <input className='w-full max-w-sm text-red-800'
              type='text'
              value={pass}
              readOnly
            >
            </input>
            <button className='bg-blue-600 p-1 rounded-lg mx-2 outline text-white'
              onClick={() => {
                navigator.clipboard.writeText(pass)
                setCopy("Copied !!")
              }}
            >Copy</button>
          </div>
          {copy && <div className='text-center text-green-500 mb-2'>{copy}</div>}
          <div className='flex items-center'>
            <input
              type="range"
              value={length}
              min={6}
              max={50}
              onChange={(e) => setLength(Number(e.target.value))}

            /><h1 className='ml-2'>Length:{length}</h1>
            <input type="checkbox" className='ml-14' onChange={() =>
              setNumAllowed(!numAllowed)
            } /><h1 className='mr-2'>Numbers</h1>
            <input type="checkbox" onChange={() =>
              setCharAllowed(!charAllowed)} /><h1 className=''>Characters</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
