import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] =useState(15)
  const add =() =>{
    if(counter <20){
    setcounter(counter+1)
    }
  }
  const remove = ()=>{
    if(counter>0){
    setcounter(counter - 1)
    }
  }
  return (
    <>
   <h1>hello react</h1>
   <button onClick={add}>add counter {counter}</button>
   <button onClick={remove}>remove counter {counter}</button>
   </>
  )
}

export default App
