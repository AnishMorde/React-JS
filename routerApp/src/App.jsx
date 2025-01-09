import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footers from './components/Footer/Footers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <Header/>
  <Home/>
  <Footers/>
    </>
  )
}

export default App
