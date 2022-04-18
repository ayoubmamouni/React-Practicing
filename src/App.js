import React, { useState } from 'react';
import { Nav } from './components';
const App = () => {
  const [state, setstate] = useState('');

  const onInputChanged = e =>{
    setstate(e.target.value)
  }
  const increment =()=>{
    setstate(state + 1)
  }
  return (
    <>
      <Nav />
      <h1>{state == '' ? 'Enter somthing': state}</h1>
      <input type="text" value={state} onChange={onInputChanged}/>
      <br/>
      <button onClick={increment}>Increment</button>
    </>
  );
};
export default App;
