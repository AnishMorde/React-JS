import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(0)
  //not propogate the changes in the ui 
  // let counter = 5 

 const addvalue = ()=>{

    // counter = counter+1;
   
    setCounter(counter+1)

}

const removeVal = ()=>{

  if(counter>0){

    setCounter(counter-1)
      
  }else{
    setCounter(0)
  }

  
  
}
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Couter value {counter}</h2>
    <button
    onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={removeVal}>Dcrement Value</button>
    </>
  )
}

export default App
