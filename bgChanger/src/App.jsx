import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='max-w-full h-screen ' style={{ backgroundColor: color  }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px2'>
        <div className=' flex flex-wrap justify-center gap-3 
        shadow-lg bg-white px-3 py-2
        rounded-xl '>
          <button
          onClick={()=> setColor("red") } className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg ' style={{backgroundColor:"red"}}>Red</button>

          <button
           onClick={()=> setColor("yellowgreen") } className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg ' style={{backgroundColor:"yellowgreen"}}>Yellow Green</button>

          <button
          onClick={()=> setColor("black") } className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg ' style={{backgroundColor:"black"}}>Black</button>

          <button
          onClick={()=> setColor("orange") } className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg ' style={{backgroundColor:"orange"}}>orange</button>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default App
