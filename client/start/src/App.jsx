import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const f=async()=>{

      const {data} =await axios.get('/api')
    }
  },[])
  return (
    <>
      
    </>
  )
}

export default App
