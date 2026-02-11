import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [imogi, setImoge] = useState("😐")
  const [arr, setPush] = useState([])
  const [obj, setObj] = useState({
    happi: 0,
    Sad: 0,
    Angry: 0
  })
  const arr2 = ["😀","😐","😢","😡"]
  return (
    <>
      <h1>{imogi}</h1>
      <h2>{arr.slice(arr.length - 4, arr.length - 1)}</h2>
      <button onClick={() => {
        setImoge("😀")
        setPush([...arr, "😀"])
        setObj({
          ...obj, happi: obj.happi + 1
        })
      }}>😀</button>
      <button onClick={() => {
        setImoge("😢")
        setPush([...arr, "😢"])
        setObj({
          ...obj, Sad: obj.Sad + 1
        })
      }}>😢</button>
      <button onClick={() => {
        setImoge("😡")
        setPush([...arr, "😡"])
        setObj({
          ...obj, Angry: obj.Angry + 1
        })
      }}>😡</button>
      <button onClick={()=>{
        setImoge(arr2[Math.floor(Math.random()*4)])
      }}>random</button>
      <button onClick={() => {
        setImoge("😐")
        setPush([])
      }}>restart</button>
      <h4>happi: {obj.happi}</h4>
      <h4>sad: {obj.Sad}</h4>
      <h4>Angry: {obj.Angry}</h4>
    </>
  )
}

export default App
