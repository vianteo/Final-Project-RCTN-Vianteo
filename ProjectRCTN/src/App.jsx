import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import NavbarComponent from './components/NavbarComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
