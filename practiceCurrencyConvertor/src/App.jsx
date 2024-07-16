import { useState } from 'react'
import { Inputbox } from './Components'
import  useCurrencyInfo  from './Hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR');
  const [amount1, setAmount1] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const currencyInfo2 = useCurrencyInfo(to);

  // it's values of the keys, not keys 
  const options = Object.keys(currencyInfo)
  const options2 = Object.keys(currencyInfo2)

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600590711251-c439ffcc61bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount = {amount1}
                amountChange = {(amount) => {setAmount1(amount)}}
                currencies = {options}
                selectCurrency = {from}
                currencyChange = {(from) => {setFrom(from)}}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => {
                  setAmount1(convertedAmount)
                  setConvertedAmount(amount1)
                  setFrom(to)
                  setTo(from)
                }}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount = {convertedAmount}
                amountChange = {(convertedAmount) => {setConvertedAmount(convertedAmount)}}
                currencies = {options2}
                selectCurrency = {to}
                currencyChange = {(to) => {setTo(to)}}

              />
            </div>
            <button type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            onClick={() => {
              setConvertedAmount(amount1*currencyInfo[to]);
            }}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
