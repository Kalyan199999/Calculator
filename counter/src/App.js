import './App.css'

import {useState} from 'react';

function App(){
  let [counter,updatedCounter] = useState(0);
  return(
    <div className='parent'>
    <div className='conatiner'>
      <button className="minus" onClick={()=>{updatedCounter(counter-1)}}>-</button>
      <p className="value">{counter}</p>
      <button className="plus" onClick={()=>{updatedCounter(counter+1)}}>+</button>    
    </div>

    <button className="reset" onClick={()=>{updatedCounter(0)}}>Reset</button>
    
    </div>
  );
}

export default App;