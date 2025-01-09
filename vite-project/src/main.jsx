import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <h1>Ganapati Bappa Morya</h1>
  )
} 

const Obj = {
  type:'a',
  props:{
      href:"https://www.google.com/"
  },
  childern:"Click Me"
}

const username  = "hitesh@567"

const newElement = React.createElement(
  'a',
  {href:"https://www.google.com/", 
  },
  'click me for google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  newElement
)
