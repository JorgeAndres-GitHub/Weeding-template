import { useState } from 'react'
import './App.css'
import { Header } from './components/header.jsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-100">
        <Header/>      
      </div>
      
    </>
  )
}


