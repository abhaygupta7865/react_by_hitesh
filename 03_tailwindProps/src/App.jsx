import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-bold bg-green-400 p-4 rounded-xl font-italic'>
      hello tailwind</h1>
      <Card  username="abhay"/>
      <Card />
      
    </>
  )
}

export default App
