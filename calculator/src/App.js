
import './App.css';
import {useState} from 'react';
import Keypad from './keypad';

function App() {

   let [input, setInput] = useState("19+5");

  function handleClick(value)
  {
    setInput(input + value);
  }

  function calculate(value)
  {
    let output = eval(input);
    setInput(output);
  }

  function handleClear()
  {
    setInput("");
  }

  return(
  <div className='conatiner'>

  <h1 >CALCULATOR</h1>
  <div className='calculator'>
    <input type='text' className='output' value={input} readOnly />
    <Keypad handleClick={handleClick} handleClear = {handleClear} handleCalculate = {calculate}></Keypad>
  </div>

  </div>
  );
}

export default App;
