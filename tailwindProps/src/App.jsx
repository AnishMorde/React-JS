import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    username : "anishmorde",
    div : "b",
    deparment :"entc"
  }

  let newArr = [1,2,3,4,5]
  return (
    <>
    <Card username = "smriti" followers = "2M" posts ="100" following ="132"/>
    <Card username = "shruti" followers = "455" posts ="10" following ="400"/>
    <Card/>
    </>
  )
}

export default App
