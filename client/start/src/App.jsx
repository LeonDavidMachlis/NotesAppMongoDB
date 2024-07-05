import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import axios from 'axios'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const f=async()=>{

      const {data} =await axios.get('/api')
      console.log(data)
    }
    f()
  },[])
  return (
    <div className=' bg-slate-400 min-h-screen'>

    <div className='container mx-auto '>
    <NavBar/>
    </div>
    </div>
  )
}

export default App
